export default class Identifier {
  validateIdentifier(s: String): boolean {
    let achar: String;
    let valid_id: Boolean = false;
    achar = s.charAt(0);
    valid_id = this.valid_s(achar);

    if (s.length > 1) {
      achar = s.charAt(1);
      let i: number = 1;
      while (i < s.length) {
        achar = s.charAt(i);
        if (!this.valid_f(achar)) valid_id = false;
        i++;
      }
    }

    if (valid_id && s.length >= 1 && s.length <= 6) return true;
    return false;
  }

  valid_s(ch: String): boolean {
    if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) return true;
    return false;
  }

  valid_f(ch: String): boolean {
    if (
      (ch >= "A" && ch <= "Z") ||
      (ch >= "a" && ch <= "z") ||
      (ch >= "0" && ch <= "9")
    )
      return true;
    return false;
  }
}
