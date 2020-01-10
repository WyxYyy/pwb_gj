import HouseAPI from './api';
import { UrlHost } from './Interface';

let houseAPI = new HouseAPI();
const token = this.$localStore.getLocal('token');

houseAPI.initForBZGUsage({ UrlHost, token });

export { houseAPI };