module BetMoveContract {

    // kullanıcı bilgileri için 
    resource struct UserInfo{
        adress: adress;
        betAmount: u64;
        prediction: bool;
        betDate: u64;
    }

    // bet modülü
    module BetModulke {
        public fun createBet(adress: &signer, amount: u64, prediction: bool){
            let sender: adress= move_from(copy(adress));
            let newBet = UserInfo{
                adress: sender,
                betAmount: amount,
                prediction: prediction,
                betDate: date,
            };
            LibraAccount.move_to(sender, &mut newBet);
        }

        public fun checkBetOutcome(prediction: bool): bool{
            return prediction; // yükseliş olursa true, düşüş olursa else true dönecek. 
        }
    }
}