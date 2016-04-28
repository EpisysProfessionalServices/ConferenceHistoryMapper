var express = require('express');
var soap = require('soap');
var path = require('path');

var app = express();
var rootPath = path.normalize(__dirname);

var wsdlUrl = './symXwsdl/account_1.wsdl';

app.use(express.static(rootPath + '/public'));

//this call gets a list of all shares on the account
app.get('/api/listShares/:id', function (req, res){
    var args = {
        Request: {
            attributes: {
                MessageId: '1'
            },
            AccountNumber: req.params.id,
            Credentials: {
                attributes: {
                    'common:ProcessorUser': '0'
                },
                UserNumberCredentials: { //these will match a user enabaled for symXchange in your test sym
                    UserNumber: 'the user number goes here',
                    Password: 'the user password goes here'
                }
            },
            DeviceInformation: { //this is the device enabled for symXchange in your test sym
                attributes: {
                    DeviceType: 'device type here',
                    DeviceNumber: 'device number here'
                }
            },
            SelectableFields: {
                ShareSelectableFields: {
                    ShareFields: {
                        balance: '1',
                        description: '1',
                        id: '1'
                    }
                }
            }
        }
    };
    
    var options = {
        ignoredNamespaces: {
        namespaces: [],
        override: true
        }
    }
    soap.createClient(wsdlUrl, options, function (err, client) {
        client.getAccountSelectFields(args, function (err, result) {
            res.send(result.SingleResponse.Account.ShareList.Share);
        })
    })
});

//this call gets all history for the selected account and share
app.get('/api/history/:acct/:id', function (req, res) {
    var args = {        
        Request: {
            attributes: {
                MessageId: '2'
            },
            AccountNumber: req.params.acct,
            ShareId: req.params.id,
            Credentials: {
                attributes: {
                    'common:ProcessorUser': '0'
                },
                UserNumberCredentials: { //these will match a user enabaled for symXchange in your test sym
                    UserNumber: 'the user number goes here',
                    Password: 'the user password goes here'
                }
            },
            DeviceInformation: { //this is the device enabled for symXchange in your test sym
                attributes: {
                    DeviceType: 'device type here',
                    DeviceNumber: 'device number here'
                }
            },
            SelectableFields: {
                IncludeAllShareTransactionFields: '1'
            }
        }
    };
    var options = {
        ignoredNamespaces: {
        namespaces: [],
        override: true
        }
    }
    soap.createClient(wsdlUrl, options, function (err, client) {
        client.getShareTransactionListSelectFields(args, function (err, result) {
            res.send(result.PluralResponse.ShareTransactionList.ShareTransaction);
        })
    })
});

app.get('*', function (req, res) {
    res.sendFile(rootPath + '/public/index.html')
});

app.listen(3000, function(){
   console.log('listening on port 3000'); 
});