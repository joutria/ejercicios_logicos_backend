function mcm (a, b) {
  let ans=a*b/mcd(a,b);
  return ans;

}

function mcd(a,b) {
  let ans=(b==0)?a:mcd(b, a%b)
  return ans;
}

module.exports = mcm;