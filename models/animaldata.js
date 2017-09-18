var Sequelize = require('sequelize');
var dbStroage = require('../config/db_config.js')


var animalMethod = {
  animalData:()=>{
    const data = dbStroage.define('animaldatas',{
      id:{ 
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      //動物的實際所在地
      place:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //動物的類型
      kind:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //動物性別
      sex:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //動物體型
      bodytype:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //動物毛色
      colour:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //動物年紀
      age:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //是否絕育
      sterilization:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //是否施打狂犬病疫苗
      bacterin:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //動物所屬收容所名稱
      shelter_name:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //圖片名稱
      album_file:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //地址
      shelter_address:{
        type:Sequelize.STRING,
        allowNull: true
      },
      //聯絡電話
      shelter_tel:{
        type:Sequelize.STRING,
        allowNull: true
      }
    }, {
      timestamps: false
    });
    return data;
  },
  addAnimalData:(obj)=>{
    animalMethod.animalData().destroy();
    obj.forEach((element)=>{
      animalMethod.animalData().create({place: element.animal_place,kind:element.animal_kind
      ,sex:element.animal_sex,bodytype:element.animal_bodytype,color:element.animal_colour
      ,age:element.animal_age,sterilization:element.animal_sterilization,bacterin:element.animal_bacterin,
      shelter_name:element.shelter_name,album_file:element.album_file,shelter_address:element.shelter_address,
      shelter_tel:element.shelter_tel});
    })
  },
  getAllAnimalData:(query)=>{
   
    var obj = checkquery(query);

    return animalMethod.animalData().findAll({where:obj});
  }
}

function checkquery({kind,shelter_name,sex,bodytype,age}){
  var obj = {};
  
  if(kind !== ''){
    obj.kind = kind;
  }
  if(shelter_name !== ''){
    obj.shelter_name = shelter_name;
  }
  if(sex !== ''){
    obj.sex = sex;
  }
  if(bodytype !== ''){
    obj.bodytype = bodytype;
  }
  if(age !== ''){
    obj.age = age;
  }
  return obj
}

module.exports = animalMethod;
/*
、、、、動物的類型、、、、、、、、、、、、、、、、、、、、、、。
{ 
動物的流水編號       animal_id: '10608230601006',     
動物的區域編號       animal_subid: '20170822006',
動物所屬縣市代碼      nimal_area_pkid: 6,
動物所屬收容所代碼    animal_shelter_pkid: 61,
✓動物的實際所在地      animal_place: '',
✓動物的類型           animal_kind: '貓',
✓動物性別            animal_sex: 'M',
✓動物體型            animal_bodytype: 'SMALL',
✓動物毛色            animal_colour: '虎斑',
✓動物年紀            animal_age: 'CHILD',
✓是否絕育            animal_sterilization: 'F',
✓是否施打狂犬病疫苗   animal_bacterin: 'N',
動物尋獲地           animal_foundplace: '龜山區',
動物網頁標題        animal_title: '',
動物狀態            animal_status: 'OPEN',
資料備註            animal_remark: '',
其他說明            animal_caption: '',
開放認養時間(起)     animal_opendate: '2017-08-23',
開放認養時間(迄)     animal_closeddate: '2999-12-31',
動物資料異動時間      animal_update: '2017-09-13 23:35:07',
動物資料建立時間      animal_createtime: '2017-08-23 18:14:37',
✓動物所屬收容所名稱     shelter_name: '桃園市動物保護教育園區',
圖片名稱(原始名稱)     album_name: null,
✓圖片名稱             album_file: 'http://animal-adoption.coa.gov.tw/uploads/animal_album/61/f07b06bb4261d272d60e26f47c258f24.jpg',
圖片base64編碼      album_base64: null,
                    album_update: null,
異動時間             cDate: '2017-09-14T00:15:23.543',
✓地址                shelter_address: '桃園市新屋區永興里大牛欄 117 號',
✓聯絡電話等欄位資訊     shelter_tel: '03-4861760 傳真: (03)4861765' }*/