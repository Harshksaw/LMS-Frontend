

export function isEmail(string) {
      return string.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}
export default function isValidPassword(string){
    return string.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
}