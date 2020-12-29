import { WebPartContext } from "@microsoft/sp-webpart-base"; 
export interface IExecutivesProps {
  Title: string;
  Name: string;
  Role: string;
  Description: string;
  Picture: string;
  context:WebPartContext; 
}
