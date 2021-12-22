import Vue from "vue";

Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
    return value;
  }
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });
  return formatter.format(value).replace(/\D00(?=\D*$)/, '');
});