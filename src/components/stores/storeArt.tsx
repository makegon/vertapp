import { observable, action, computed} from "mobx";

export default class TestStore{
  @observable test1 = 'test';
  @observable token = 'vlKd3hoPHZxLojCGSasWeaFi1Kw7G6SDnL1vm5PKmqyjyfHVGeeaEic0UAbGb06S';
  @observable urlHTTP = `http://10.102.100.121:3000/api/tasks?access_token=${this.token}`;
  @observable delHTTP = `http://10.102.100.121:3000/api/tasks?access_token=${this.token}`;;
  @observable btnEdit = 'РЕДАКТИРОВАТЬ';
  @observable btnDrop = 'Удалить';
  @observable btnSave = 'СОХРАНИТЬ';
  @observable getMeetup = '';
  @observable iconNote = 'sticky-note';
  @observable titleHead = 'Список заметок';
  @observable articleEdit = true;

  @action getTitle = (data) => {
      this.titleHead = data;
  }
  @action articleView = () => {
      this.articleEdit = !this.articleEdit;
  }

  @observable nickName = 'nickname';
  @observable classMobx = 'btn btn-primary btn-lg btn-dark float-left btn_blc';
  @observable className = 'nickname';
  @observable getName = 'Вася';



  @observable fname = 'Фамилия';
  @observable lname ='Имя';
  @observable nickName='Gtlhj';

  @computed get fullName() {
    return this.fname +' '+this.lname;
  }
  @action setNickName = () => {
    this.nickName = "Warrior";
    this.btnMobx = 'nickname?';
    this.classMobx = 'btn btn-primary btn-lg btn-dark float-left btn_blc';
  }
  @action actGET = (meetupId) => {
    this.getName = meetupId;
  }


}

