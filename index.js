function PwdStrength(
    password,
    minLength = 8, 
    requireUppercase = true,
    requireLowercase = true,
    requireDigits = true, 
    requireSpecialChars = true
    )
 {
    const length = password?.length;
    const isUppercase = /[A-Z]/.test(password);
    const isLowercase = /[a-z]/.test(password);
    const isDigits = /\d/.test(password);
    const isSpecialChars = /[!@#\$%\^&\*]/.test(password);
  
    let score = 0;
    if (length >= minLength) {
      score++;
    }
    if (requireUppercase && isUppercase) {
      score++;
    }
    if (requireLowercase && isLowercase) {
      score++;
    }
    if (requireDigits && isDigits) {
      score++;
    }
    if (requireSpecialChars && isSpecialChars) {
      score++;
    }
    
    if(!requireUppercase){ score++; }
    if(!requireLowercase){ score++; }
    if(!requireDigits){ score++; }
    if(!requireSpecialChars){ score++; }

    const feedback = [
      'Too Short',
      'Weak',
      'Moderate',
      'Moderate',
      'Moderate',
      'Strong'
    ][score];
  
    return {
      valid: score===5,
      feedback: feedback,
    };
  }

  module.exports(PwdStrength);
