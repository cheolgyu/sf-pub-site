<template>
  <details open >
    <summary>회사-상태정보</summary>
    <table>
      <tr>
        <th>매매거래정지</th>
        <th>정리매매 종목</th>
        <th>관리종목</th>
        <th>투자주의환기종목</th>
        <th>불성실공시</th>
        <th>단일가매매대상 초저유동성종목</th>
        <th>상장주식수 부족 우선주</th>
        <th>단기과열종목</th>
        <th>투자주의종목</th>
        <th>투자경고종목</th>
        <th>투자위험종목</th>
      </tr>
      <tr>
        <td>{{ data.stop }}</td>
        <td>{{ data.clear }}</td>
        <td>{{ data.managed }}</td>
        <td>{{ data.ventilation }}</td>
        <td>{{ data.unfaithful }}</td>
        <td>{{ data.low_liquidity }}</td>
        <td>{{ data.lack_listed }}</td>
        <td>{{ data.overheated }}</td>
        <td>{{ data.caution }}</td>
        <td>{{ data.warning }}</td>
        <td>{{ data.risk }}</td>
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
