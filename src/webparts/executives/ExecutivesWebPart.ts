import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ExecutivesWebPartStrings';
import Executives from './components/Executives';
import { IExecutivesProps } from './components/IExecutivesProps';

export interface IExecutivesWebPartProps {
  Title: string;
  Name: string;
  Role: string;
  Description: string;
  Picture: string;
}

export default class ExecutivesWebPart extends BaseClientSideWebPart<IExecutivesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IExecutivesProps> = React.createElement(
      Executives,
      {
        Title: this.properties.Title,
        Name: this.properties.Name,
        Role: this.properties.Role,
        Description: this.properties.Description,
        Picture: this.properties.Picture,
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
