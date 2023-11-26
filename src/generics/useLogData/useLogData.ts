import { useQuery } from "react-query";
import data from '../../api.json';
import { toast } from "react-toastify";
import { getResponseMessage } from "../../constants/response";


function fetchExpensesData() {
    return Promise.resolve(data.expenses);
}

function fetchWalletData() {
    return Promise.resolve(data.wallet);
}


export function useLogData() {
    const { data: expenseData, isLoading: isExpenseDataLoading, isError: isExpenseDataError } = useQuery({
        queryKey: ['logdata'],
        queryFn: () => fetchExpensesData(),
        onError: () => {
            const error = getResponseMessage('error', 'default');
            toast(error, {
              position: 'top-right',
              theme: 'colored',
              autoClose: 3_500,
              closeOnClick: true,
              type: 'error',
            });
        },
        refetchOnWindowFocus: false,
    });
    const { data: walletData, isLoading: isWalletDataLoading, isError: isWalletDataError, } = useQuery({
        queryKey: ['logdata'],
        queryFn: () => fetchWalletData(),
        onError: () => {
            const error = getResponseMessage('error', 'default');
            toast(error, {
              position: 'top-right',
              theme: 'colored',
              autoClose: 3_500,
              closeOnClick: true,
              type: 'error',
            });
        },
        refetchOnWindowFocus: false,
    });
    return {
        expenseData,
        isExpenseDataError,
        isExpenseDataLoading,
        isWalletDataError,
        isWalletDataLoading,
        walletData,
    }
}