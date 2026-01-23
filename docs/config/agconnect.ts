/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 18:28
 */
import {AGConnectServicesConfig} from '@hw-agconnect/instance-types';
import {AGCApi} from '@hw-agconnect/api-types';

const config: AGConnectServicesConfig = {
  agcgw: {
    backurl: 'connect-drcn.hispace.hicloud.com',
    url: 'connect-drcn.dbankcloud.cn',
    websocketbackurl: 'connect-ws-drcn.hispace.dbankcloud.com',
    websocketurl: 'connect-ws-drcn.hispace.dbankcloud.cn',
  },
  agcgw_all: {
    CN: 'connect-drcn.dbankcloud.cn',
    CN_back: 'connect-drcn.hispace.hicloud.com',
    DE: 'connect-dre.dbankcloud.cn',
    DE_back: 'connect-dre.hispace.hicloud.com',
    RU: 'connect-drru.hispace.dbankcloud.ru',
    RU_back: 'connect-drru.hispace.dbankcloud.cn',
    SG: 'connect-dra.dbankcloud.cn',
    SG_back: 'connect-dra.hispace.hicloud.com',
  },
  websocketgw_all: {
    CN: 'connect-ws-drcn.hispace.dbankcloud.cn',
    CN_back: 'connect-ws-drcn.hispace.dbankcloud.com',
    DE: 'connect-ws-dre.hispace.dbankcloud.cn',
    DE_back: 'connect-ws-dre.hispace.dbankcloud.com',
    RU: 'connect-ws-drru.hispace.dbankcloud.ru',
    RU_back: 'connect-ws-drru.hispace.dbankcloud.cn',
    SG: 'connect-ws-dra.hispace.dbankcloud.cn',
    SG_back: 'connect-ws-dra.hispace.dbankcloud.com',
  },
  client: {
    cp_id: '2850086000397728042',
    product_id: '737518067793679060',
    client_id: '752904393795306560',
    client_secret:
      '49574EE8136AB984BD133DCAED1904D34F73FAD9A8F612C24A9A848337291555',
    project_id: '737518067793679060',
    app_id: '245150415728165679',
    api_key:
      'CwEAAAAA+3r4aa1Y4tCdCRh45ghf59Nas7IgyQhcHKjicazkFJUTsAThvzCp46JLwvm43bkSE8mvdVRvqQwVBXgZasYzUBhBP7Y=',
  },
  oauth_client: {
    client_id: '113316685',
    client_type: 7,
  },
  app_info: {
    app_id: '245150415728165679',
  },
  service: {
    analytics: {
      collector_url:
        'datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn',
      collector_url_ru:
        'datacollector-drru.dt.dbankcloud.ru,datacollector-drru.dt.hicloud.com',
      collector_url_sg:
        'datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn',
      collector_url_de:
        'datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn',
      collector_url_cn:
        'datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn',
      resource_id: 'p1',
      channel_id: '',
    },
    edukit: {
      edu_url: 'edukit.cloud.huawei.com.cn',
      dh_url: 'edukit.cloud.huawei.com.cn',
    },
    search: {
      url: 'https://search-drcn.cloud.huawei.com',
    },
    cloudstorage: {
      storage_url_sg_back: 'https://agc-storage-dra.cloud.huawei.asia',
      storage_url_ru_back: 'https://agc-storage-drru.cloud.huawei.ru',
      storage_url_ru: 'https://agc-storage-drru.cloud.huawei.ru',
      storage_url_de_back: 'https://agc-storage-dre.cloud.huawei.eu',
      storage_url_de: 'https://ops-dre.agcstorage.link',
      storage_url: 'https://agc-storage-drcn.platform.dbankcloud.cn',
      storage_url_sg: 'https://ops-dra.agcstorage.link',
      storage_url_cn_back: 'https://agc-storage-drcn.cloud.huawei.com.cn',
      storage_url_cn: 'https://agc-storage-drcn.platform.dbankcloud.cn',
    },
    ml: {
      mlservice_url:
        'ml-api-drcn.ai.dbankcloud.com,ml-api-drcn.ai.dbankcloud.cn',
    },
  },
  region: 'CN',
  configuration_version: '3.0',
};

const initAgconnect = async () => {
  await import('@hw-agconnect/remoteconfig');
  await import('@hw-agconnect/instance');
  const agconnectApi = await import('@hw-agconnect/api');
  const agconnect = agconnectApi.default;
  agconnect.instance().configInstance(config);
  return agconnect;
};

let agconnectInstance: AGCApi;

export const getAgconnect = async (): Promise<AGCApi> => {
  if (!agconnectInstance) {
    agconnectInstance = await initAgconnect();
  }
  return agconnectInstance;
};

export const getCurrentAgconnect = () => agconnectInstance;
