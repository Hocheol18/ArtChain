export const convertToInteger = (value: string) => {
    // 부동 소수점 수로 변환
    const floatValue = parseFloat(value);
    // 10^18을 곱하여 처리
    const integerValue = Math.floor(floatValue * (10 ** 18)).toString();
    return integerValue;
};

