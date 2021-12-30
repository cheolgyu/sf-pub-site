<template>
  <div id="stock_hist">
    <div>
      거래방식:
      <input type="radio" />
      <label for="">최고가</label>

      <input type="radio" />
      <label for="">최저가</label>
    </div>
    <div>
      <label for="">시장: </label>
      <input type="radio" />
      <label for="">코스피</label>
      <input type="radio" />
      <label for="">코스닥</label>
      <input type="radio" />
      <label for="">코넥스</label>
    </div>
    <div>
      <label for="">가격 종류: </label>
      <input type="radio" />
      <label for="">종가</label>
      <input type="radio" />
      <label for="">시가</label>
      <input type="radio" />
      <label for="">저가</label>
      <input type="radio" />
      <label for="">고가</label>
    </div>
    <div>
      <label for="">기간 </label>
      <select name="" id="">
        <option value="">1주</option>
        <option value="">2주</option>
        <option value="">3주</option>
        <option value="">4주</option>
      </select>
      <select name="" id="">
        <option value="">1개월</option>
        <option value="">2개월</option>
        <option value="">3개월</option>
        <option value="">4개월</option>
      </select>
    </div>
    <table>
      <caption>
        코스피
      </caption>
      <thead>
        <th>종목 이름</th>
        <th>어제 일자</th>
        <th>어제 가격</th>
        <th>52주 최고가 일자</th>
        <th>52주 최고가 가격</th>
        <th>네이버링크</th>
      </thead>
      <tbody>
        <tr>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
        </tr>
        <tr>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
        </tr>
        <tr>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
          <td>211212</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Table from "../../components/grid/table/Table.vue";
import Tr from "../../components/grid/table/Tr.vue";
export default {
  components: { Table, Tr },
  data() {
    return {};
  },
  setup() {},
};
</script>
