import { useState } from "react";
function CardWithForm() {
  const [payValue, setPayValue] = useState("0.003");

  const handleChange = (char: string) => {
    setPayValue(char);
  };

  const calculateDollarValue = (value: string) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return "0.00";
    return (numericValue * 2).toFixed(3); // 2x ile çarpma
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[400px] p-6 bg-black border-white border-4 rounded  shadow-md">
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-white text-left">
            You pay
          </label>
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
            <div className="flex-1">
              <input
                type="number"
                value={payValue}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full text-2xl font-bold text-gray-900 bg-transparent border-none focus:outline-none h-10 leading-tight box-border"
              />
              <div className="text-sm text-gray-500 text-left">
                ${calculateDollarValue(payValue)}
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-2">
              <img
                src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                alt="USDC"
                className="w-6 h-6"
              />
              <span className="text-lg font-medium text-gray-900">USDC</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-white text-left">
            You earn
          </label>
          <div className="flex items-center justify-between p-4 bg-white border rounded">
            <div className="flex-1">
              <div className="w-full text-2xl font-bold text-gray-900 text-left min-w-[100px] h-10 leading-tight box-border">
                {payValue}
              </div>
              <div className="text-sm text-gray-500 text-left">
                ${calculateDollarValue(payValue)}
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-2">
              <img
                src="https://cryptologos.cc/logos/weth-logo.png"
                alt="WETH"
                className="w-6 h-6"
              />
              <span className="text-lg font-medium text-gray-900">WETH</span>
            </div>
          </div>
        </div>
        <button className="w-full py-3 text-white bg-black rounded hover:bg-gray-800">
          Stake
        </button>
      </div>
    </div>
  );
}

export default CardWithForm;
