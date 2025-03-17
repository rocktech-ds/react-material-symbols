import type { ElementType, CSSProperties, ReactElement, Ref, ForwardedRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';
import type {
  MaterialSymbolWeight,
  PolymorphicComponentProps,
  SymbolCodepoints,
} from './types';
export type { MaterialSymbolWeight, SymbolCodepoints } from './types';
import { combineClasses } from './utils';

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

export type PolymorphicMaterialSymbolProps<C extends ElementType> =
  PolymorphicComponentProps<C, MaterialSymbolProps>;

type PolymorphicRef<C extends ElementType> =
  PolymorphicMaterialSymbolProps<C>['ref'];

type MaterialSymbolComponent = <C extends ElementType = 'span'>(
  props: PolymorphicMaterialSymbolProps<C> & { ref?: PolymorphicRef<C> },
) => ReactElement | null;

// Create a specialized forwardRef for polymorphic components
function polymorphicForwardRef<P, C extends ElementType = 'span'>(
	render: ForwardRefRenderFunction<any, PropsWithoutRef<P>>
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<any>> & {
	<T extends ElementType = C>(
	  props: PolymorphicMaterialSymbolProps<T> & RefAttributes<any>
	): ReactElement | null;
  } {
	return forwardRef(render) as any;
  }
  
export const MaterialSymbol = polymorphicForwardRef<PolymorphicMaterialSymbolProps<any>>(
  ({
	icon,
	onClick,
	as,
	weight,
	fill = false,
	grade,
	size,
	style: propStyle,
	color,
	className,
	...props
  }, ref) => {
	const Component = onClick ? 'button' : as || 'span';
	const style: CSSProperties = { color, ...propStyle };
	const fontVariationSettings: string[] = [];
  
	if (fill) fontVariationSettings.push('"FILL" 1');
	if (weight) fontVariationSettings.push(`"wght" ${weight}`);
	if (grade) fontVariationSettings.push(`"GRAD" ${grade}`);
	if (size) {
	  fontVariationSettings.push(`"opsz" ${size}`);
	  style.fontSize = size;
	}
  
	if (fontVariationSettings.length > 0) {
	  style.fontVariationSettings = fontVariationSettings.join(', ');
	}
  
	return (
	  <Component
		{...props}
		ref={ref}
		style={style}
		onClick={onClick}
		className={combineClasses('material-symbols', className)}
	  >
		{icon}
	  </Component>
	);
  }
  );