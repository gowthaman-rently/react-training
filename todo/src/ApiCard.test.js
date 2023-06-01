import ApiCardCom from "./ApiCard"
import React from 'react';
import ReactDOM  from 'react-dom'; 
import * as api from "./Api"
import { screen, waitFor, render, act } from "@testing-library/react";


jest.mock("./Api");

beforeEach(()=>jest.clearAllMocks());
test("api testing", async ()=>{
    
    act(()=>{
        api.ApiCaller.mockResolvedValue({
            results: [{
                "title": "Black",
                "description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
                "ingredients": [
                "Coffee",
                "Whiskey"
                ],
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
                "id": 1
            }]
        })
        render(<ApiCardCom/>);
    });
    screen.queryByText('[{"title":"Black","description":"Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.","ingredients":["Coffee","Whiskey"],"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG","id":1}]');
})