/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 18:55
 */
import {getAgconnect, getCurrentAgconnect} from '@/config/agconnect';
import {RangeColor, RangeColorData} from './type';

const initRemoteConfig = async () => {
  const agconnect = await getAgconnect();
  await agconnect.remoteConfig().initialized();
  await agconnect.remoteConfig().fetch();
  await agconnect.remoteConfig().apply();
};

export const getColorConfig = async () => {
  await initRemoteConfig();
  const jsonStr = getCurrentAgconnect()
    .remoteConfig()
    .getValueAsString('courseScoreRequestRange');
  const json = JSON.parse(jsonStr) as RangeColorData;
  const map = {};
  json.range.forEach((range: RangeColor) => {
    map[`${range.from}-${range.to}`] = range.color;
  });
  return map;
};
