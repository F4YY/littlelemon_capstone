import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data, url) => {
    const random = Math.random();
    // url = "http://localhost:3002/Reservation_guest";
    // axios.post(url);
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.1) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `You've successfully reserve a table, ${data.Name}. Please check your email periodically as we will send your reservation data.`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  const login = async (resvdata, url) => {
    const random = Math.random();
    // url = "http://localhost:3002/Reservation_guest";
    // axios.post(url);
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.1) {
        throw new Error("You have not been reserved a table yet");
      }
      setResponse({
        type: 'success',
        message: `Here is your reservation data, ${resvdata.Name}. Please show it to our cashier and or staff restaurant while you arrived for confirmation.`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'You have no reservation data yet, please reserve a table using input form!',
      })
    } finally {
      setLoading(false);
    }
  };
  return { isLoading, response, submit, login };
}

export default useSubmit;