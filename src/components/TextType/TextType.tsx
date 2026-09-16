'use client';


import { type ElementType, useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

interface TextTypeProps {
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorCharacter?: string | React.ReactNode;
    cursorBlinkDuration?: number;
    cursorClassName?: string;
    text: string | string[];
    as?: ElementType;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    loop?: boolean;
    textColors?: string[];
    variableSpeed?: { min: number; max: number };
    onSentenceComplete?: (sentence: string, index: number) => void;
    startOnVisible?: boolean;
    reverseMode?: boolean;
}

const TextType = ({
    text,
    as: Component = 'div',
    className = '',
    showCursor = true,
    hideCursorWhileTyping = false,
    cursorCharacter = '|',
    cursorClassName = 'text-type__cursor',
    cursorBlinkDuration = 0.8,
    typingSpeed = 100,
    initialDelay = 100,
    pauseDuration = 1000,
    deletingSpeed = 50,
    loop = true,
    textColors,
    variableSpeed,
    onSentenceComplete,
    startOnVisible = false,
    reverseMode = false
}: TextTypeProps) => {
    // If no text is provided, do nothing
    if (!text) return null;

    const [currentText, setCurrentText] = useState<string>('');

    // Normalized text list
    const textArray = useMemo(() => Array.isArray(text) ? text : [text], [text]);

    // Refs for State Management
    const currentSentenceIndex = useRef<number>(0);
    const currentCharIndex = useRef<number>(0);
    const isDeleting = useRef<boolean>(false);
    const isPaused = useRef<boolean>(false);
    const elementRef = useRef<HTMLElement>(null);

    // Cursor Blinking Effect using GSAP
    useEffect(() => {
        if (!showCursor) return;

        const cursor = elementRef.current?.querySelector('.text-type__cursor');
        if (cursor) {
            if (hideCursorWhileTyping && !isPaused.current) {
                gsap.set(cursor, { opacity: 1 });
                gsap.killTweensOf(cursor);
            } else {
                gsap.to(cursor, {
                    opacity: 0,
                    duration: cursorBlinkDuration,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }
        }
    }, [showCursor, hideCursorWhileTyping, cursorBlinkDuration, isPaused.current]);


    // Typing Logic
    const handleTyping = useCallback(() => {
        if (isPaused.current) return;

        const currentSentence = textArray[currentSentenceIndex.current];

        if (isDeleting.current) {
            // DELETING
            if (currentCharIndex.current > 0) {
                currentCharIndex.current--;
                let speed = deletingSpeed;
                if (variableSpeed) {
                    speed = Math.floor(Math.random() * (variableSpeed.max - variableSpeed.min + 1)) + variableSpeed.min;
                }
                setTimeout(() => {
                    setCurrentText(currentSentence.substring(0, currentCharIndex.current));
                    handleTyping();
                }, speed);
            } else {
                // Finished Deleting
                isDeleting.current = false;
                currentSentenceIndex.current++;
                if (currentSentenceIndex.current >= textArray.length) {
                    if (loop) {
                        currentSentenceIndex.current = 0;
                    } else {
                        return; // Stop if not looping
                    }
                }
                setTimeout(handleTyping, typingSpeed);
            }
        } else {
            // TYPING
            if (currentCharIndex.current < currentSentence.length) {
                currentCharIndex.current++;
                let speed = typingSpeed;
                if (variableSpeed) {
                    speed = Math.floor(Math.random() * (variableSpeed.max - variableSpeed.min + 1)) + variableSpeed.min;
                }
                setTimeout(() => {
                    setCurrentText(currentSentence.substring(0, currentCharIndex.current));
                    if (onSentenceComplete && currentCharIndex.current === currentSentence.length) {
                        onSentenceComplete(currentSentence, currentSentenceIndex.current);
                    }
                    handleTyping();
                }, speed);
            } else {
                // Finished Typing Sentence
                isPaused.current = true;
                if (hideCursorWhileTyping) {
                    // Resume blinking when paused
                    const cursor = elementRef.current?.querySelector('.text-type__cursor');
                    if (cursor) {
                        gsap.to(cursor, {
                            opacity: 0,
                            duration: cursorBlinkDuration,
                            repeat: -1,
                            yoyo: true,
                            ease: "power1.inOut"
                        });
                    }
                }

                setTimeout(() => {
                    isPaused.current = false;
                    if (reverseMode || (textArray.length > 1) || (loop && textArray.length === 1)) {
                        isDeleting.current = true;
                        handleTyping();
                    }
                }, pauseDuration);
            }
        }
    }, [textArray, typingSpeed, deletingSpeed, loop, variableSpeed, pauseDuration, reverseMode, hideCursorWhileTyping, cursorBlinkDuration, onSentenceComplete]);


    // Intersection Observer for startOnVisible
    useEffect(() => {
        if (!startOnVisible) {
            setTimeout(handleTyping, initialDelay);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(handleTyping, initialDelay);
                observer.disconnect();
            }
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [handleTyping, startOnVisible, initialDelay]);


    return (
        <Component className={`${className} text-type`} ref={elementRef as any}>
            <span className="text-type__content" style={{ color: textColors ? textColors[currentSentenceIndex.current % textColors.length] : undefined }}>
                {currentText}
            </span>
            {showCursor && (
                <span className={`text-type__cursor ${cursorClassName} ${hideCursorWhileTyping && !isPaused.current ? 'text-type__cursor--hidden' : ''}`}>
                    {cursorCharacter}
                </span>
            )}
        </Component>
    );
};

export default TextType;
