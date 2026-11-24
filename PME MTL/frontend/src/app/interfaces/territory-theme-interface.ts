export type ChartType = 'bar_stacked' | 'bar' | 'lollipop';
export type BarDescriptionPosition = 'top' | 'bottom' | 'middle' | 'none';
export type TerritoryId =
  | 'anjou' | 'montreal_nord' | 'saint_leonard'
  | 'riviere_des_prairies' | 'montreal_est';

// 1. Structure : identique pour tous les territoires
export interface ThemeStructure {
  id: string;
  number: string;
  chartType: ChartType;
  descriptionPosition: BarDescriptionPosition;
  hasPercentageBottomDescription?: boolean;
  barIds: string[];                 // l'ordre d'affichage des barres
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