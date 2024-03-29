export default async function MetaMask(): Promise<string> {
  if ((window as any).ethereum) {
    try {
      const accounts: string[] = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        console.log(accounts[0]);
        return accounts[0]; // This returns the first account
      } else {
        return "MetamaskAccountNotFound"; // No accounts found case
      }
    } catch (error: any) {
      // 사용자가 거절할 경우 또는 오류가 발생한 경우 처리
      console.error(error);
      return "MetamaskRejct"; // Custom error message
    }
  } else {
    return "MetamaskUninstall"; // Custom message for no MetaMask
  }
}
