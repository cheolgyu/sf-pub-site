<template>
  <details >
    <summary>회사-기본정보</summary>
    <table>
      <tr>
        <td>단축 코드</td>
        <td>표준 코드</td>
        <td>한글 종목명</td>
        <td>한글 종목약명</td>
        <td>영문 종목명</td>
        <td>상장일</td>
        <td>시장구분</td>
        <td>증권구분</td>
        <td>소속부</td>
        <td>주식종류</td>
        <td>액면가</td>
        <td>상장주식수</td>
      </tr>
      <tr>
        <td>{{ data.code }}</td>
        <td>{{ data.full_code }}</td>
        <td>{{ data.full_name_kr }}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.full_name_eng }}</td>
        <td>{{ data.listing_date }}</td>
        <td>{{ data.market }}</td>
        <td>{{ data.securities_classification }}</td>
        <td>{{ data.department }}</td>
        <td>{{ data.stock_type }}</td>
        <td>{{ data.face_value }}</td>
        <td>{{ data.listed_stocks }}</td>
      </tr>
    </table>
  </details>
 
</template>
<script>
/*eslint no-unused-vars: "error"*/

export default {
  props: {
    data: Object,
  },
};
</script>
