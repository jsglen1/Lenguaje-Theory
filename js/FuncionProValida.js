function ProValida(data){
  if(  ValidacionPro.test(data)) {
      return false;
  }
  return true;
}