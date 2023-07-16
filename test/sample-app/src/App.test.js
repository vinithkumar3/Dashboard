import { render, screen,fireEvent  } from '@testing-library/react';
import App from './App';
import LogIn from './login';

// //test('renders learn react link', () => {
//  ?? render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// //});
test("the component should render",()=>{
  render(<LogIn />);
})
      


test("Should display student login",async()=>{
  render(<LogIn />);
   const button = screen.getByText("Show Text");
   await fireEvent.click(button);
  const studentLogin = screen.getByText("Login here");
  expect(studentLogin).toBeTruthy()
})
