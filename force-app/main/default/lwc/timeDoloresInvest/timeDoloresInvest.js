import { LightningElement, wire, track } from 'lwc';
import getListaFundos from '@salesforce/apex/FundosController.getListaFundos';

const COLUNAS = [
    { label: 'Fundo', fieldName: 'Chave__c', editable: false },
    { label: 'Volume Negociado', fieldName: 'Volume__c', editable: false },    
    { label: 'Abertura', fieldName: 'Abertura__c', editable: false },
    { label: 'Fechamento', fieldName: 'Fechamento__c', editable: false },
    { label: 'Alta', fieldName: 'Alta__c', editable: false },
    { label: 'Baixa', fieldName: 'Baixa__c', editable: false }    
];

export default class DatatableUpdateExample extends LightningElement {
    @track columns = COLUNAS;

    @wire(getListaFundos)
    fundos;
 
}