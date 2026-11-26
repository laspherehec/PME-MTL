export type ChartType = 'bar_stacked' | 'bar' | 'lollipop';
export type BarDescriptionPosition = 'top' | 'bottom' | 'middle' | 'none';
export const TERRITORY_IDS = [
  'anjou',
  'montreal_nord',
  'saint_leonard',
  'riviere_des_prairies',
  'montreal_est',
] as const;
export type TerritoryId = (typeof TERRITORY_IDS)[number];

const territoryIdSet: ReadonlySet<string> = new Set(TERRITORY_IDS);

export function isTerritoryId(value: string | null): value is TerritoryId {
  return value !== null && territoryIdSet.has(value);
}
export type BarColor = 'primary' | 'secondary';
export type BarLabelSource= 'theme' | 'territories';
export interface BarGroup {
  id: string; // clé i18n : groups.<id>.heading pou e theme 03 et pour le reste on a main ou secondary
  barIds: string[];
  color: BarColor;
  hasHeading?: boolean; // true si un heading est affiché au-dessus du groupe exemple theme numero 03
}

// 1. Structure : identique pour tous les territoires
export interface ThemeStructure {
  id: string;
  number: string;
  chartType: ChartType;
  barDescriptionPosition: BarDescriptionPosition;
  hasPercentageBottomDescription?: boolean;
  barLabelSource?: BarLabelSource;
  barGroups: BarGroup[];
}

export interface TerritoryStat {
  share: number;
  gap: number;
}

// ce qui est propre au territoire
export interface ThemeValues {
  mainPercentage: number;
  sampleSize: number;
  bars: Record<string, number>;
  stats: Partial<Record<TerritoryId, TerritoryStat>>;
}
