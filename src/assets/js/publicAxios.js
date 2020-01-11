import HouseAPI from './api';
import Interface from './Interface';

let houseAPI = new HouseAPI();
const token = this.$localStore.getLocal('token');
const UrlHost = Interface.UrlHost;

houseAPI.initForBZGUsage({ UrlHost, token });

export { houseAPI };