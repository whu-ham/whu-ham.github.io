/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 18:54
 */
interface RangeColor {
  from: number;
  to: number;
  color: string;
}

interface RangeColorData {
  range: RangeColor[];
}

export type {RangeColorData, RangeColor};
