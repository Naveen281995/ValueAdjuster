import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class NumberIncreament implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    /**
     * Empty constructor.
     */
    private container:HTMLDivElement;
    private inputElement:HTMLInputElement;
    private addButtonElement:HTMLButtonElement;
    private subButtonElement:HTMLButtonElement;
    private textLabelElement:HTMLLabelElement;
    private _inputNumber:number;
    private _operationNumberBy:number;
    private context:ComponentFramework.Context<IInputs>;
    private notifyOutputChanged:() => void;


    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        // Add control initialization code
        this.context=context;
        this.container=container;
        this.notifyOutputChanged=notifyOutputChanged;
        var br = document.createElement("br");
        this.textLabelElement=document.createElement("label");
        this.textLabelElement.innerHTML="Value Adjust By  ";
        this.container.appendChild(this.textLabelElement);
        this.inputElement=document.createElement("input");
        this.inputElement.setAttribute("type","number");
        this.inputElement.setAttribute("style","width:400px;border:solid 1px #f0f0f0;box-shadow:0px 4px 5px #e0e0e0");
        this._operationNumberBy=context.parameters.operationNumberBy.raw||0;
        this._inputNumber=context.parameters.inputNumber.raw||0;
        this.inputElement.value= String(this._inputNumber);
        this.container.appendChild(this.inputElement);
        this.container.appendChild(br);
        this.addButtonElement=document.createElement("button");
        this.addButtonElement.innerHTML="+ by "+this._operationNumberBy;
        this.addButtonElement.setAttribute("style","width:10%;justify:centre;height:20px");
        
        this.addButtonElement.addEventListener("click",(e:Event) => this.increamentByOne(Number(this.inputElement.value),this._operationNumberBy));
        this.subButtonElement=document.createElement("button");
        this.subButtonElement.innerHTML="- by "+this._operationNumberBy;
        this.subButtonElement.setAttribute("style","width:10%;justify:centre;height:20px");
        
        this.subButtonElement.addEventListener("click",(e:Event) => this.decreamentByOne(Number(this.inputElement.value),this._operationNumberBy));
        this.container.appendChild(this.addButtonElement);
        this.container.appendChild(this.subButtonElement);

    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view
        this._inputNumber=context.parameters.inputNumber.raw||0;
        this._operationNumberBy=context.parameters.operationNumberBy.raw||0;
        this.inputElement.value= String(this._inputNumber);
        this.addButtonElement.innerHTML="+ by "+this._operationNumberBy;
        this.subButtonElement.innerHTML="- by "+this._operationNumberBy;
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs
    {
        return {
            inputNumber:this._inputNumber
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }

    public increamentByOne(num:number,oppNum:number){
        num=num+oppNum;
        this.inputElement.value= String(num);
        this._inputNumber=Number(this.inputElement.value);
        this.notifyOutputChanged();
    }

    public decreamentByOne(num:number,oppNum:number){
        num=num-oppNum;
        this.inputElement.value= String(num);
        this._inputNumber=Number(this.inputElement.value);
        this.notifyOutputChanged();
    }
}
