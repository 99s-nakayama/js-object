/**
 * assignメソッド
 * 既存のオブジェクトを結合できる
 * 戻り値として結合後のオブジェクトが返されるが元のオブジェクトにも影響が出る
 * 構文
 * 　Object.assign(target,source,...)
 * target:ターゲット,source:元のオブジェクト
 *
 * 注意点
 * 同名のものは後のものが優先される
 */

const pet = {
  type: "スノーホワイトハムスター",
  name: "きら",
  description: {
    brith: "2014-01-01"
  }
};

const pet2 = {
  name: "山田キラ",
  color: "白",
  description: {
    food: "ひまわりのタネ"
  }
};

const pet3 = {
  weight: 42,
  photo: "http://www.wings.msn.to/img/ham.jpeg"
};

Object.assign(pet, pet2, pet3);
console.log(pet);
