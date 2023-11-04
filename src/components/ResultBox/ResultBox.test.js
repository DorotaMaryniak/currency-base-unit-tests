import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from='PLN' to='USD' amount={100}/>);
      });

    it('should render proper info about conversion when PLN->USD', () => {

        const testCasesPLNtoUSD = [
            { amount: '100', from: 'PLN', to: 'USD' , result:'PLN 100.00 = $28.57'},
            { amount: '20', from: 'PLN', to: 'USD' , result: 'PLN 20.00 = $5.71'},
            { amount: '200', from: 'PLN', to: 'USD', result: 'PLN 200.00 = $57.14'},
            { amount: '345', from: 'PLN', to: 'USD', result: 'PLN 345.00 = $98.57' },
      ];

      for (const testObj of testCasesPLNtoUSD){
        render(<ResultBox from = {testObj.from} to={testObj.to} amount={parseFloat(testObj.amount)}/>);

    const resultField = screen.getByTestId('result');
    expect(resultField).toHaveTextContent(testObj.result);
    cleanup();
      }
      });

      it('should render proper info about conversion when USD->PLN', () => {

        const testCasesUSDtoPLN = [
            { amount: '100', from: 'USD', to: 'PLN' , result:'$100.00 = PLN 350.00'},
            { amount: '20', from: 'USD', to: 'PLN' , result: '$20.00 = PLN 70.00'},
            { amount: '200', from: 'USD', to: 'PLN', result: '$200.00 = PLN 700.00'},
            { amount: '345', from: 'USD', to: 'PLN', result: '$345.00 = PLN 1,207.50'},
      ];

      for (const testObj of testCasesUSDtoPLN){
        render(<ResultBox from = {testObj.from} to={testObj.to} amount={parseFloat(testObj.amount)}/>);

    const resultField = screen.getByTestId('result');
    expect(resultField).toHaveTextContent(testObj.result);
    cleanup();
      }
      });


});