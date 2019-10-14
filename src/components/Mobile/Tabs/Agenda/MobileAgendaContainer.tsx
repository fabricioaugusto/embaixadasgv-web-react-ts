import React, {Component} from "react";
import {AppState} from "../../../../reducers";
import {bindActionCreators, Dispatch} from "redux";
import {listUsers} from "../../../../actions/users_actions";
import {connect} from "react-redux";

class MobileAgendaContainer extends Component{
    render() {
        return(
            <div>
                <p>Mobile Agenda</p>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    currentUserDetails: state.auth.userDetails,
    users: state.users.usersList,
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({listUsers}, dispatch)
);

export default connect (mapStateToProps, mapDispatchToProps) (MobileAgendaContainer)