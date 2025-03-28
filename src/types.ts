import type { JSXElementConstructor, ComponentPropsWithoutRef, JSX } from 'react';
import type { MaterialSymbolWeightArray, SymbolCodepointsArray } from './consts';

/**
 * Argument type for {@link combineClasses}. Contains a list of classes to be aggregated into a string.
 */
export type Classes = Array<string | false | undefined>;

export type SymbolCodepoints = (typeof SymbolCodepointsArray)[number];

export type MaterialSymbolWeight = (typeof MaterialSymbolWeightArray)[number];

export interface AsProperty<C extends React.ElementType> {
	/**
	 * An override of the default HTML tag.
	 * Can also be another React component.
	 */
	as?: C;
}

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<
	C extends React.ElementType,
	Properties = Record<string, unknown>
> = InheritableElementProps<C, Properties & AsProperty<C>>;

/**
 * Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
 * A more precise version of just React.ComponentPropsWithoutRef on its own
 */
export type PropsOf<C extends keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>> =
	JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>;

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<
	ExtendedProperties = Record<string, unknown>,
	OverrideProperties = Record<string, unknown>
> = OverrideProperties & Omit<ExtendedProperties, keyof OverrideProperties>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<
	C extends React.ElementType,
	Properties = Record<string, unknown>
> = ExtendableProps<PropsOf<C>, Properties>;
