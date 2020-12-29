import React, {useState, useEffect} from 'react';
import styles from "./Executives.module.scss";
import { IExecutivesProps } from "./IExecutivesProps";
import { escape } from "@microsoft/sp-lodash-subset";
import * as jQuery from "jquery";
import { ClassExecutives } from "./ClassExecutives";
import { IExecutives } from "./IExecutives";
import { Web } from "sp-pnp-js";

export default class Executives extends React.Component<IExecutivesProps, any> {

  public constructor(props: IExecutivesProps, any) {
    super(props);
    this.state = {
      items: [],
    };
    

  }
  public render(): React.ReactElement<IExecutivesProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none");
    jQuery(".SPCanvas-canvas").prop("style", "max-width: none");
    jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <div className={styles.contents}>
        <h2>Executives</h2>
      <div className={styles.grid}>
        {this.state.items.map(function (item: IExecutives) {
          return (
            <>
              <div className={styles.team}>
                <div className={styles.teamImg}>
                  <img src={item.Picture} alt="Team Image" />
                </div>
                <div className={styles.teamContent}>
                  <h3>{item.Name}</h3>
                  <h5>{item.Role}</h5>
                  {/* <p>{item.Description.substring(0, 200)}</p> */}
                  <p className={styles.target}>{item.Description}</p>
                  {/* <input type="checkbox" className={styles.checkbox} id="post" />
                  <label htmlFor="post" className={styles.trigger}></label>*/}
                </div> 
              </div>
            </>
          );
        })}
      </div>
      </div>
    );
  }
  public componentDidMount() {
    // debugger;
    this._UsersList();
  }
  private _UsersList(): void {
    let web = new Web(this.props.context.pageContext.web.absoluteUrl);
    web.lists
      .getByTitle(`OurManagementTeam`)
      .items.get()
      .then((response) => {
        console.log(response);
        let UsersCollection = response.map((item) => new ClassExecutives(item));
        let UsersCard = UsersCollection;
        this.setState({ items: UsersCard });
      });
  }
}
