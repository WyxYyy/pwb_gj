import axios from 'axios';


class HouseAPI {

  initForBZGUsage({server, token}) {
    this.server = server;
    this.req = axios.create({
      headers: {
        'XX-Token': token,
        'XX-Device-Type': 'mobile'
      }
    });
    return this;
  }

  getStatisticsInfo(type, data = null) {
    let url = this.server;
    switch(type) {
      case 'Statistics': 
        url = url + '/api/keeper/Statistics/teamStatistics';
        break;
      case 'teamStaff': 
        url = url + '/api/keeper/Statistics/teamAchievementList';
        break;
    }
    return this.req.get(url, {params: data});
  }



}

export { HouseAPI };