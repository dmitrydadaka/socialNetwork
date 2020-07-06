import React from "react";
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        // newStatus:"",
        status: this.props.status

    }

    activeEditMode = () => {
        // console.log("this",this);
        //console.log(this.state.editMode)
        this.setState({editMode: true});
        // this.state.editMode=true;
        //this.forceUpdate() kostyl
        //console.log(this.state.editMode)

    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
        // this.state.status=  e.target.value;
        // this.updateNewStatus(this.state.newStatus);
        // this.props.updateStatus(this.state.status);
    }
    // updateNewStatus=()=>{
    //     return{...this.state,newStatus:this.action.newStatus}
    // }


    componentDidUpdate(prevProps, prevState) {

        if(prevProps.status!==this.props.status)
        { this.setState({status:this.props.status})}
       // console.log("componentDidUpdate");
    }

    render() {1
       // console.log("render")

        return (
            <div>

                {!this.state.editMode &&
                <div>
                    {/*onChange={this.onStatusChange} value={this.state.status} {this.props.status} momentalno menyaetsa, no global status  zatragivaet li*/}
                    <span onDoubleClick={this.activeEditMode}>{this.props.status || "no STATUS"}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }

            </div>

        )
    }

}

export default ProfileStatus;