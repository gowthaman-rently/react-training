import { render, screen } from '@testing-library/react';
import React from 'react';
import CallBackCard from './CallBack';
import userEvent from '@testing-library/user-event';


const mockFunc = jest.fn();

test("callback testing",()=>{
    render(<CallBackCard callback={mockFunc}></CallBackCard>);
    const callBtn = screen.getByRole("button");
    screen.debug();
    userEvent.click(callBtn);
    expect(mockFunc).toHaveBeenCalled();
})