import email from './single-email.html';
import controller from './single-email-controller';

const singleEmail = ()=>{
    return{
        template: email,
        restrict: 'E',
        scope:{
            email:'<'
        },
        controllerAs: '$ctrl',
        controller:controller
    }
}

export default singleEmail;



