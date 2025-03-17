import type { ElementType, CSSProperties, ReactElement, Ref, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { MaterialSymbolWeight, PolymorphicComponentProps, SymbolCodepoints } from './types';
export type { MaterialSymbolWeight, SymbolCodepoints } from './types';
export type MaterialSymbolProps = {
    /** Required. The name of the icon to render. */
    icon: SymbolCodepoints;
    /** Default `false`. */
    fill?: boolean;
    /** Symbol stroke weight (100 to 900). */
    weight?: MaterialSymbolWeight;
    /** Symbol thickness granularity. */
    grade?: number;
    /** Icon size in pixels. */
    size?: number;
    /** Icon color. */
    color?: CSSProperties['color'];
    /** Additional class names. */
    className?: string;
    /** Inline styles. */
    style?: CSSProperties;
    /** Ref for the icon element. */
    ref?: Ref<HTMLElement>;
};
export type PolymorphicMaterialSymbolProps<C extends ElementType> = PolymorphicComponentProps<C, MaterialSymbolProps>;
export declare const MaterialSymbol: ForwardRefExoticComponent<Omit<PolymorphicMaterialSymbolProps<any>, "ref"> & RefAttributes<any>> & (<T extends ElementType<any, keyof import("react").JSX.IntrinsicElements> = "span">(props: MaterialSymbolProps & import("./types").AsProperty<T> & Omit<import("react").JSX.LibraryManagedAttributes<T, PropsWithoutRef<import("react").ComponentProps<T>>>, "as" | keyof MaterialSymbolProps> & RefAttributes<any>) => ReactElement | null);
