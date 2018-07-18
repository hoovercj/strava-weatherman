import * as React from 'react';

import 'src/styles/colors.css';
import 'src/styles/fonts.css';
import './index.css';

import { PageFooter } from 'src/components/page-footer';
import { ICopyrightInfo } from 'src/models/copyright-info';
import { IStrava } from 'src/services/strava/strava';

export interface IPageProps {
    copyrightInfo: ICopyrightInfo;
    strava: IStrava;
    name: string;
}

export abstract class Page<T extends IPageProps> extends React.Component<T> {
    public render() {
        return (
            <div className={this.containerClass()}>
                {this._renderHeader()}
                {this._renderContent()}
                {this._renderFooter()}
            </div>
        );
    }

    protected abstract renderHeader(): JSX.Element | JSX.Element[];

    protected abstract renderContent(): JSX.Element | JSX.Element[];

    protected renderFooter(): JSX.Element | JSX.Element[] {
        return (
            <PageFooter copyrightInfo={this.props.copyrightInfo}/>
        );
    }

    protected containerClass(): string {
        return 'page_container';
    }

    protected headerClass(): string {
        return 'page_header';
    }
    
    protected contentClass(): string {
        return 'page_content';
    }

    protected footerClass(): string {
        return 'page_footer';
    }

    private _renderHeader = () => {
        return (
            <div className={this.headerClass()}>
                {this.renderHeader()}
            </div>
        );
    }

    private _renderContent = () => {
        return (
            <div className={this.contentClass()}>
                {this.renderContent()}
            </div>
        );
    }

    private _renderFooter = () => {
        return (
            <div className={this.footerClass()}>
                {this.renderFooter()}
            </div>
        );
    }
}

export default Page;
