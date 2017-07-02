import email from './single-email.html';
import SingleEmailController from './single-email-controller';

const singleEmail = ()=>{
    return {
        restrict:'AE',
        template: email,
        bindToController: {
            email: '<'
        },
        controller:SingleEmailController,
        controllerAs: '$ctrl'
    }
};

export default singleEmail;