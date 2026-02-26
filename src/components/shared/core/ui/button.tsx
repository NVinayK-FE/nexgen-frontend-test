'use client';

import { motion } from 'motion/react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';

const buttonVariants = cva(
    "inline-flex items-center justify-center text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    {
        variants: {
            size: {
                default:
                    'min-w-[80px] gap-1 px-12 py-2.5 rounded-full opacity-100 text-sm leading-5 font-medium font-sans',
                ghost: 'size-fit p-1 rounded-full',
                icon: 'size-fit rounded-full',
            },
            variant: {
                default:
                    'bg-green-600 shadow-xs hover:bg-green-600/80 cursor-pointer text-primary-foreground ripple-host',
                destructive:
                    'bg-destructive shadow-xs hover:bg-destructive/80 cursor-pointer text-primary-foreground ripple-host',
                secondary:
                    'bg-secondary shadow-xs hover:bg-secondary/80 cursor-pointer text-primary ripple-host',
                outline:
                    'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground cursor-pointer ripple-host',
                ghost: 'cursor-pointer',
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
    },
);

interface MyButtonProps
    extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}

function Button({
    className,
    variant,
    size,
    asChild = false,
    isLoading = false,
    children,
    disabled,
    ...props
}: MyButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={cn(
                buttonVariants({ variant, size }),
                isLoading && 'relative overflow-hidden',
                className,
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <span className="invisible flex items-center justify-center">{children}</span>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ y: '0%' }}
                        animate={{ y: '-150%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {children}
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 flex items-center justify-center gap-1"
                        initial={{ y: '150%' }}
                        animate={{ y: '0%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="h-1.5 w-1.5 rounded-full bg-current"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.2,
                                    ease: 'easeInOut',
                                }}
                            />
                        ))}
                    </motion.div>
                </>
            ) : (
                children
            )}
        </Comp>
    );
}

export { Button, buttonVariants };
