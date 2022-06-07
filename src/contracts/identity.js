module.exports = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_claimType",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_scheme",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "_signature",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                },
                {
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                }
            ],
            "name": "addClaim",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "claimRequestId",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_purpose",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_type",
                    "type": "uint256"
                }
            ],
            "name": "addKey",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_claimType",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_scheme",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_issuer",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes[]",
                    "name": "_signature",
                    "type": "bytes[]"
                },
                {
                    "internalType": "bytes[]",
                    "name": "_data",
                    "type": "bytes[]"
                },
                {
                    "internalType": "string[]",
                    "name": "_uri",
                    "type": "string[]"
                }
            ],
            "name": "addMultipleClaim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_approve",
                    "type": "bool"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_claimType",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_scheme",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_issuer",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes",
                    "name": "_signature",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                },
                {
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_sigSizes",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "dataSizes",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "uriSizes",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "executionId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "Approved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "claimId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "signatureType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "signature",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "claim",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "claimId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "claimId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "claimId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "claimRequestId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimRequested",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "execute",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "executionId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "executionId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "Executed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "executionId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "ExecutionFailed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "executionId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "ExecutionRequested",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "purpose",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "keyType",
                    "type": "uint256"
                }
            ],
            "name": "KeyAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "purpose",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "keyType",
                    "type": "uint256"
                }
            ],
            "name": "KeyRemoved",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_claimId",
                    "type": "bytes32"
                }
            ],
            "name": "removeClaim",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "removeKey",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "_str",
                    "type": "bytes"
                },
                {
                    "internalType": "uint256",
                    "name": "_offset",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_length",
                    "type": "uint256"
                }
            ],
            "name": "getbytes",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_claimId",
                    "type": "bytes32"
                }
            ],
            "name": "getClaim",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_claimType",
                    "type": "uint256"
                }
            ],
            "name": "getClaimIdsByType",
            "outputs": [
                {
                    "internalType": "bytes32[]",
                    "name": "claimIds",
                    "type": "bytes32[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getKey",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "purpose",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "keyType",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getKeyPurpose",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "purpose",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_purpose",
                    "type": "uint256"
                }
            ],
            "name": "getKeysByPurpose",
            "outputs": [
                {
                    "internalType": "bytes32[]",
                    "name": "_keys",
                    "type": "bytes32[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_str",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_offset",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_length",
                    "type": "uint256"
                }
            ],
            "name": "getString",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_purpose",
                    "type": "uint256"
                }
            ],
            "name": "keyHasPurpose",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "result",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    data: "608060405260016000556002600155600360025560046003553480156200002557600080fd5b506040516200476d3803806200476d83398181016040528101906200004b919062000d3e565b60003360405160200162000060919062000f84565b6040516020818303038152906040528051906020012090508060056000838152602001908152602001600020600201819055506001600560008381526020019081526020016000206000018190555060016005600083815260200190815260200160002060010181905550600660006001815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505560016005600083815260200190815260200160002060000154827f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e960405160405180910390a4506000806000905060008060005b8d5181101562000527578b81815181106200017a576200017962000fa1565b5b60200260200101518e828151811062000198576200019762000fa1565b5b6020026020010151604051602001620001b392919062000ff5565b6040516020818303038152906040528051906020012094506040518060c001604052808f8381518110620001ec57620001eb62000fa1565b5b602002602001015181526020018e83815181106200020f576200020e62000fa1565b5b602002602001015181526020018d838151811062000232576200023162000fa1565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1681526020018c81526020016200028b8c858b868151811062000277576200027662000fa1565b5b60200260200101516200053b60201b60201c565b8152602001620002c08b868a8681518110620002ac57620002ab62000fa1565b5b60200260200101516200064860201b60201c565b81525060086000878152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030190805190602001906200034f9291906200075b565b5060808201518160040190805190602001906200036e9291906200075b565b5060a08201518160050190805190602001906200038d929190620007ec565b50905050878181518110620003a757620003a662000fa1565b5b602002602001015184620003bc919062001054565b9350858181518110620003d457620003d362000fa1565b5b602002602001015183620003e9919062001054565b925086818151811062000401576200040062000fa1565b5b60200260200101518262000416919062001054565b91506008600086815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166008600087815260200190815260200160002060000154867f46149b18aa084502c3f12bc75e19eda8bda8d102b82cce8474677a6d0d5f43c5600860008a815260200190815260200160002060010154600860008b8152602001908152602001600020600301600860008c8152602001908152602001600020600401600860008d81526020019081526020016000206005016040516200050994939291906200128b565b60405180910390a480806200051e90620012ed565b9150506200015a565b50505050505050505050505050506200133b565b606060008267ffffffffffffffff8111156200055c576200055b620008c6565b5b6040519080825280601f01601f1916602001820160405280156200058f5781602001600182028036833780820191505090505b5090506000808590505b8486620005a7919062001054565b8110156200063b57868181518110620005c557620005c462000fa1565b5b602001015160f81c60f81b838381518110620005e657620005e562000fa1565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535081806200062290620012ed565b92505080806200063290620012ed565b91505062000599565b5081925050509392505050565b6060600084905060008367ffffffffffffffff8111156200066e576200066d620008c6565b5b6040519080825280601f01601f191660200182016040528015620006a15781602001600182028036833780820191505090505b5090506000808690505b8587620006b9919062001054565b8110156200074d57838181518110620006d757620006d662000fa1565b5b602001015160f81c60f81b838381518110620006f857620006f762000fa1565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535081806200073490620012ed565b92505080806200074490620012ed565b915050620006ab565b508193505050509392505050565b8280546200076990620010f1565b90600052602060002090601f0160209004810192826200078d5760008555620007d9565b82601f10620007a857805160ff1916838001178555620007d9565b82800160010185558215620007d9579182015b82811115620007d8578251825591602001919060010190620007bb565b5b509050620007e891906200087d565b5090565b828054620007fa90620010f1565b90600052602060002090601f0160209004810192826200081e57600085556200086a565b82601f106200083957805160ff19168380011785556200086a565b828001600101855582156200086a579182015b82811115620008695782518255916020019190600101906200084c565b5b5090506200087991906200087d565b5090565b5b80821115620008985760008160009055506001016200087e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200090082620008b5565b810181811067ffffffffffffffff82111715620009225762000921620008c6565b5b80604052505050565b6000620009376200089c565b9050620009458282620008f5565b919050565b600067ffffffffffffffff821115620009685762000967620008c6565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b62000993816200097e565b81146200099f57600080fd5b50565b600081519050620009b38162000988565b92915050565b6000620009d0620009ca846200094a565b6200092b565b90508083825260208201905060208402830185811115620009f657620009f562000979565b5b835b8181101562000a23578062000a0e8882620009a2565b845260208401935050602081019050620009f8565b5050509392505050565b600082601f83011262000a455762000a44620008b0565b5b815162000a57848260208601620009b9565b91505092915050565b600067ffffffffffffffff82111562000a7e5762000a7d620008c6565b5b602082029050602081019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000abc8262000a8f565b9050919050565b62000ace8162000aaf565b811462000ada57600080fd5b50565b60008151905062000aee8162000ac3565b92915050565b600062000b0b62000b058462000a60565b6200092b565b9050808382526020820190506020840283018581111562000b315762000b3062000979565b5b835b8181101562000b5e578062000b49888262000add565b84526020840193505060208101905062000b33565b5050509392505050565b600082601f83011262000b805762000b7f620008b0565b5b815162000b9284826020860162000af4565b91505092915050565b600080fd5b600067ffffffffffffffff82111562000bbe5762000bbd620008c6565b5b62000bc982620008b5565b9050602081019050919050565b60005b8381101562000bf657808201518184015260208101905062000bd9565b8381111562000c06576000848401525b50505050565b600062000c2362000c1d8462000ba0565b6200092b565b90508281526020810184848401111562000c425762000c4162000b9b565b5b62000c4f84828562000bd6565b509392505050565b600082601f83011262000c6f5762000c6e620008b0565b5b815162000c8184826020860162000c0c565b91505092915050565b600067ffffffffffffffff82111562000ca85762000ca7620008c6565b5b62000cb382620008b5565b9050602081019050919050565b600062000cd762000cd18462000c8a565b6200092b565b90508281526020810184848401111562000cf65762000cf562000b9b565b5b62000d0384828562000bd6565b509392505050565b600082601f83011262000d235762000d22620008b0565b5b815162000d3584826020860162000cc0565b91505092915050565b60008060008060008060008060006101208a8c03121562000d645762000d63620008a6565b5b60008a015167ffffffffffffffff81111562000d855762000d84620008ab565b5b62000d938c828d0162000a2d565b99505060208a015167ffffffffffffffff81111562000db75762000db6620008ab565b5b62000dc58c828d0162000a2d565b98505060408a015167ffffffffffffffff81111562000de95762000de8620008ab565b5b62000df78c828d0162000b68565b97505060608a015167ffffffffffffffff81111562000e1b5762000e1a620008ab565b5b62000e298c828d0162000c57565b96505060808a015167ffffffffffffffff81111562000e4d5762000e4c620008ab565b5b62000e5b8c828d0162000c57565b95505060a08a015167ffffffffffffffff81111562000e7f5762000e7e620008ab565b5b62000e8d8c828d0162000d0b565b94505060c08a015167ffffffffffffffff81111562000eb15762000eb0620008ab565b5b62000ebf8c828d0162000a2d565b93505060e08a015167ffffffffffffffff81111562000ee35762000ee2620008ab565b5b62000ef18c828d0162000a2d565b9250506101008a015167ffffffffffffffff81111562000f165762000f15620008ab565b5b62000f248c828d0162000a2d565b9150509295985092959850929598565b60008160601b9050919050565b600062000f4e8262000f34565b9050919050565b600062000f628262000f41565b9050919050565b62000f7e62000f788262000aaf565b62000f55565b82525050565b600062000f92828462000f69565b60148201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b62000fef62000fe9826200097e565b62000fd0565b82525050565b600062001003828562000f69565b60148201915062001015828462000fda565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062001061826200097e565b91506200106e836200097e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620010a657620010a562001025565b5b828201905092915050565b620010bc816200097e565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200110a57607f821691505b60208210811415620011215762001120620010c2565b5b50919050565b600082825260208201905092915050565b60008190508160005260206000209050919050565b600081546200115c81620010f1565b62001168818662001127565b945060018216600081146200118657600181146200119957620011d0565b60ff1983168652602086019350620011d0565b620011a48562001138565b60005b83811015620011c857815481890152600182019150602081019050620011a7565b808801955050505b50505092915050565b600082825260208201905092915050565b60008190508160005260206000209050919050565b600081546200120e81620010f1565b6200121a8186620011d9565b945060018216600081146200123857600181146200124b5762001282565b60ff198316865260208601935062001282565b6200125685620011ea565b60005b838110156200127a5781548189015260018201915060208101905062001259565b808801955050505b50505092915050565b6000608082019050620012a26000830187620010b1565b8181036020830152620012b681866200114d565b90508181036040830152620012cc81856200114d565b90508181036060830152620012e28184620011ff565b905095945050505050565b6000620012fa826200097e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562001330576200132f62001025565b5b600182019050919050565b613422806200134b6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063862642f511610097578063b61d27f611610066578063b61d27f6146102f8578063c9100bcb14610328578063d202158d1461035d578063df9319be1461038d576100f5565b8063862642f51461024c5780639010f7261461027c578063a37d6a2f146102ac578063b1a34e0d146102c8576100f5565b8063262b54f5116100d3578063262b54f51461018c57806330171450146101bc5780634eee424a146101ec578063747442d31461021c576100f5565b8063032c1a8a146100fa57806312aaac701461012a5780631d3812401461015c575b600080fd5b610114600480360381019061010f9190611e0c565b6103bd565b6040516101219190611e52565b60405180910390f35b610144600480360381019061013f9190611e0c565b6103dd565b60405161015393929190611e7c565b60405180910390f35b61017660048036038101906101719190611edf565b610434565b6040516101839190611f4d565b60405180910390f35b6101a660048036038101906101a19190611f68565b6105f8565b6040516101b39190612053565b60405180910390f35b6101d660048036038101906101d191906121bb565b610663565b6040516101e391906122b2565b60405180910390f35b61020660048036038101906102019190611e0c565b61075e565b6040516102139190611f4d565b60405180910390f35b61023660048036038101906102319190612300565b610981565b6040516102439190611f4d565b60405180910390f35b61026660048036038101906102619190611e0c565b610d2b565b6040516102739190611f4d565b60405180910390f35b61029660048036038101906102919190611f68565b610e2d565b6040516102a39190612053565b60405180910390f35b6102c660048036038101906102c1919061278c565b610e98565b005b6102e260048036038101906102dd91906128c1565b61136b565b6040516102ef91906129a2565b60405180910390f35b610312600480360381019061030d91906129bd565b611651565b60405161031f9190611e52565b60405180910390f35b610342600480360381019061033d9190611e0c565b611859565b60405161035496959493929190612a90565b60405180910390f35b61037760048036038101906103729190612b06565b611ac3565b6040516103849190611f4d565b60405180910390f35b6103a760048036038101906103a29190612b46565b611b18565b6040516103b49190612bb5565b60405180910390f35b600060056000838152602001908152602001600020600001549050919050565b60008060006005600085815260200190815260200160002060000154600560008681526020019081526020016000206001015460056000878152602001908152602001600020600201549250925092509193909250565b6000836005600086815260200190815260200160002060020154141561048f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048690612c23565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610533576104f3336040516020016104d69190612c8b565b604051602081830303815290604052805190602001206001611ac3565b610532576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052990612d18565b60405180910390fd5b5b836005600086815260200190815260200160002060020181905550826005600086815260200190815260200160002060000181905550816005600086815260200190815260200160002060010181905550600660008481526020019081526020016000208490806001815401808255809150506001900390600052602060002001600090919091909150558183857f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e960405160405180910390a4600190509392505050565b60606009600083815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561065757602002820191906000526020600020905b815481526020019060010190808311610643575b50505050509050919050565b606060008267ffffffffffffffff81111561068157610680612090565b5b6040519080825280601f01601f1916602001820160405280156106b35781602001600182028036833780820191505090505b5090506000808590505b84866106c99190612d67565b811015610751578681815181106106e3576106e2612dbd565b5b602001015160f81c60f81b83838151811061070157610700612dbd565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350818061073b90612dec565b925050808061074990612dec565b9150506106bd565b5081925050509392505050565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610804576107c4336040516020016107a79190612c8b565b604051602081830303815290604052805190602001206001611ac3565b610803576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fa90612d18565b60405180910390fd5b5b6008600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166008600084815260200190815260200160002060000154837f3cf57863a89432c61c4a27073c6ee39e8a764bff5a05aebfbcdcdc80b2e6130a60086000878152602001908152602001600020600101546008600088815260200190815260200160002060030160086000898152602001908152602001600020600401600860008a81526020019081526020016000206005016040516108f39493929190612fc0565b60405180910390a46008600083815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556003820160006109569190611c19565b6004820160006109669190611c19565b6005820160006109769190611c59565b505060019050919050565b600080336040516020016109959190612c8b565b6040516020818303038152906040528051906020012090506109b8816002611ac3565b6109f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ee90613066565b60405180910390fd5b837fb3932da477fe5d6c8ff2eafef050c0f3a1af18fc07121001482600f36f3715d884604051610a279190611f4d565b60405180910390a2600115158315151415610cf05760016007600086815260200190815260200160002060030160006101000a81548160ff0219169083151502179055506007600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600760008681526020019081526020016000206002016000604051602001610ae19291906130d8565b604051602081830303815290604052604051610afd9190613144565b6000604051808303816000865af19150503d8060008114610b3a576040519150601f19603f3d011682016040523d82523d6000602084013e610b3f565b606091505b5050809250508115610c355760016007600086815260200190815260200160002060030160016101000a81548160ff02191690831515021790555060076000858152602001908152602001600020600101546007600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16857f1f920dbda597d7bf95035464170fa58d0a4b57f13a1c315ace6793b9f63688b860076000898152602001908152602001600020600201604051610c23919061315b565b60405180910390a46001915050610d25565b60076000858152602001908152602001600020600101546007600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16857fe10c49d9f7c71da23262367013434763cfdb2332267641728d25cd712c5c6a6860076000898152602001908152602001600020600201604051610cde919061315b565b60405180910390a46000915050610d25565b60006007600086815260200190815260200160002060030160006101000a81548160ff02191690831515021790555060019150505b92915050565b600081600560008481526020019081526020016000206002015414610d85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7c906131c9565b60405180910390fd5b6005600083815260200190815260200160002060010154600560008481526020019081526020016000206000015460056000858152602001908152602001600020600201547f585a4aef50f8267a92b32412b331b20f7f8b96f2245b253b9cc50dcc621d339760405160405180910390a46005600083815260200190815260200160002060008082016000905560018201600090556002820160009055505060019050919050565b606060066000838152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610e8c57602002820191906000526020600020905b815481526020019060010190808311610e78575b50505050509050919050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f3c57610efc33604051602001610edf9190612c8b565b604051602081830303815290604052805190602001206003611ac3565b610f3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f329061325b565b60405180910390fd5b5b60005b86518160ff161015611362576000858260ff1681518110610f6357610f62612dbd565b5b6020026020010151888360ff1681518110610f8157610f80612dbd565b5b6020026020010151604051602001610f9a92919061329c565b604051602081830303815290604052805190602001209050858260ff1681518110610fc857610fc7612dbd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110905760096000898460ff168151811061105257611051612dbd565b5b602002602001015181526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150555b878260ff16815181106110a6576110a5612dbd565b5b60200260200101516008600083815260200190815260200160002060000181905550868260ff16815181106110de576110dd612dbd565b5b60200260200101516008600083815260200190815260200160002060010181905550858260ff168151811061111657611115612dbd565b5b60200260200101516008600083815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848260ff168151811061118857611187612dbd565b5b60200260200101516008600083815260200190815260200160002060030190805190602001906111b9929190611c99565b50838260ff16815181106111d0576111cf612dbd565b5b6020026020010151600860008381526020019081526020016000206004019080519060200190611201929190611c99565b50828260ff168151811061121857611217612dbd565b5b6020026020010151600860008381526020019081526020016000206005019080519060200190611249929190611d1f565b50858260ff16815181106112605761125f612dbd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16888360ff168151811061129457611293612dbd565b5b6020026020010151827f46149b18aa084502c3f12bc75e19eda8bda8d102b82cce8474677a6d0d5f43c58a8660ff16815181106112d4576112d3612dbd565b5b6020026020010151898760ff16815181106112f2576112f1612dbd565b5b6020026020010151898860ff16815181106113105761130f612dbd565b5b6020026020010151898960ff168151811061132e5761132d612dbd565b5b602002602001015160405161134694939291906132c8565b60405180910390a450808061135a90613322565b915050610f3f565b50505050505050565b600080858860405160200161138192919061329c565b6040516020818303038152906040528051906020012090503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461143d576113fd336040516020016113e09190612c8b565b604051602081830303815290604052805190602001206003611ac3565b61143c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114339061325b565b60405180910390fd5b5b8573ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146114e157600960008981526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150555b876008600083815260200190815260200160002060000181905550866008600083815260200190815260200160002060010181905550856008600083815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600860008381526020019081526020016000206003019080519060200190611596929190611c99565b50836008600083815260200190815260200160002060040190805190602001906115c1929190611c99565b50826008600083815260200190815260200160002060050190805190602001906115ec929190611d1f565b508573ffffffffffffffffffffffffffffffffffffffff1688827f46149b18aa084502c3f12bc75e19eda8bda8d102b82cce8474677a6d0d5f43c58a89898960405161163b94939291906132c8565b60405180910390a4809150509695505050505050565b600060076000600454815260200190815260200160002060030160019054906101000a900460ff16156116b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b090613398565b60405180910390fd5b8360076000600454815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260076000600454815260200190815260200160002060010181905550816007600060045481526020019081526020016000206002019080519060200190611759929190611c99565b50828473ffffffffffffffffffffffffffffffffffffffff166004547f8afcfabcb00e47a53a8fc3e9f23ff47ee1926194bb1350dd007c50b412a6cee8856040516117a491906122b2565b60405180910390a46117dd336040516020016117c09190612c8b565b604051602081830303815290604052805190602001206001611ac3565b806118155750611814336040516020016117f79190612c8b565b604051602081830303815290604052805190602001206002611ac3565b5b15611829576118276004546001610981565b505b6004600081548092919061183c90612dec565b9190505550600160045461185091906133b8565b90509392505050565b6000806000606080606060086000888152602001908152602001600020600001546008600089815260200190815260200160002060010154600860008a815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860008b8152602001908152602001600020600301600860008c8152602001908152602001600020600401600860008d815260200190815260200160002060050182805461191690612e64565b80601f016020809104026020016040519081016040528092919081815260200182805461194290612e64565b801561198f5780601f106119645761010080835404028352916020019161198f565b820191906000526020600020905b81548152906001019060200180831161197257829003601f168201915b505050505092508180546119a290612e64565b80601f01602080910402602001604051908101604052809291908181526020018280546119ce90612e64565b8015611a1b5780601f106119f057610100808354040283529160200191611a1b565b820191906000526020600020905b8154815290600101906020018083116119fe57829003601f168201915b50505050509150808054611a2e90612e64565b80601f0160208091040260200160405190810160405280929190818152602001828054611a5a90612e64565b8015611aa75780601f10611a7c57610100808354040283529160200191611aa7565b820191906000526020600020905b815481529060010190602001808311611a8a57829003601f168201915b5050505050905095509550955095509550955091939550919395565b6000806000801b60056000868152602001908152602001600020600201541415611af1576000915050611b12565b82600560008681526020019081526020016000206000015411159050809150505b92915050565b6060600084905060008367ffffffffffffffff811115611b3b57611b3a612090565b5b6040519080825280601f01601f191660200182016040528015611b6d5781602001600182028036833780820191505090505b5090506000808690505b8587611b839190612d67565b811015611c0b57838181518110611b9d57611b9c612dbd565b5b602001015160f81c60f81b838381518110611bbb57611bba612dbd565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508180611bf590612dec565b9250508080611c0390612dec565b915050611b77565b508193505050509392505050565b508054611c2590612e64565b6000825580601f10611c375750611c56565b601f016020900490600052602060002090810190611c559190611da5565b5b50565b508054611c6590612e64565b6000825580601f10611c775750611c96565b601f016020900490600052602060002090810190611c959190611da5565b5b50565b828054611ca590612e64565b90600052602060002090601f016020900481019282611cc75760008555611d0e565b82601f10611ce057805160ff1916838001178555611d0e565b82800160010185558215611d0e579182015b82811115611d0d578251825591602001919060010190611cf2565b5b509050611d1b9190611da5565b5090565b828054611d2b90612e64565b90600052602060002090601f016020900481019282611d4d5760008555611d94565b82601f10611d6657805160ff1916838001178555611d94565b82800160010185558215611d94579182015b82811115611d93578251825591602001919060010190611d78565b5b509050611da19190611da5565b5090565b5b80821115611dbe576000816000905550600101611da6565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611de981611dd6565b8114611df457600080fd5b50565b600081359050611e0681611de0565b92915050565b600060208284031215611e2257611e21611dcc565b5b6000611e3084828501611df7565b91505092915050565b6000819050919050565b611e4c81611e39565b82525050565b6000602082019050611e676000830184611e43565b92915050565b611e7681611dd6565b82525050565b6000606082019050611e916000830186611e43565b611e9e6020830185611e43565b611eab6040830184611e6d565b949350505050565b611ebc81611e39565b8114611ec757600080fd5b50565b600081359050611ed981611eb3565b92915050565b600080600060608486031215611ef857611ef7611dcc565b5b6000611f0686828701611df7565b9350506020611f1786828701611eca565b9250506040611f2886828701611eca565b9150509250925092565b60008115159050919050565b611f4781611f32565b82525050565b6000602082019050611f626000830184611f3e565b92915050565b600060208284031215611f7e57611f7d611dcc565b5b6000611f8c84828501611eca565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611fca81611dd6565b82525050565b6000611fdc8383611fc1565b60208301905092915050565b6000602082019050919050565b600061200082611f95565b61200a8185611fa0565b935061201583611fb1565b8060005b8381101561204657815161202d8882611fd0565b975061203883611fe8565b925050600181019050612019565b5085935050505092915050565b6000602082019050818103600083015261206d8184611ff5565b905092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6120c88261207f565b810181811067ffffffffffffffff821117156120e7576120e6612090565b5b80604052505050565b60006120fa611dc2565b905061210682826120bf565b919050565b600067ffffffffffffffff82111561212657612125612090565b5b61212f8261207f565b9050602081019050919050565b82818337600083830152505050565b600061215e6121598461210b565b6120f0565b90508281526020810184848401111561217a5761217961207a565b5b61218584828561213c565b509392505050565b600082601f8301126121a2576121a1612075565b5b81356121b284826020860161214b565b91505092915050565b6000806000606084860312156121d4576121d3611dcc565b5b600084013567ffffffffffffffff8111156121f2576121f1611dd1565b5b6121fe8682870161218d565b935050602061220f86828701611eca565b925050604061222086828701611eca565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015612264578082015181840152602081019050612249565b83811115612273576000848401525b50505050565b60006122848261222a565b61228e8185612235565b935061229e818560208601612246565b6122a78161207f565b840191505092915050565b600060208201905081810360008301526122cc8184612279565b905092915050565b6122dd81611f32565b81146122e857600080fd5b50565b6000813590506122fa816122d4565b92915050565b6000806040838503121561231757612316611dcc565b5b600061232585828601611eca565b9250506020612336858286016122eb565b9150509250929050565b600067ffffffffffffffff82111561235b5761235a612090565b5b602082029050602081019050919050565b600080fd5b600061238461237f84612340565b6120f0565b905080838252602082019050602084028301858111156123a7576123a661236c565b5b835b818110156123d057806123bc8882611eca565b8452602084019350506020810190506123a9565b5050509392505050565b600082601f8301126123ef576123ee612075565b5b81356123ff848260208601612371565b91505092915050565b600067ffffffffffffffff82111561242357612422612090565b5b602082029050602081019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061245f82612434565b9050919050565b61246f81612454565b811461247a57600080fd5b50565b60008135905061248c81612466565b92915050565b60006124a56124a084612408565b6120f0565b905080838252602082019050602084028301858111156124c8576124c761236c565b5b835b818110156124f157806124dd888261247d565b8452602084019350506020810190506124ca565b5050509392505050565b600082601f8301126125105761250f612075565b5b8135612520848260208601612492565b91505092915050565b600067ffffffffffffffff82111561254457612543612090565b5b602082029050602081019050919050565b600061256861256384612529565b6120f0565b9050808382526020820190506020840283018581111561258b5761258a61236c565b5b835b818110156125d257803567ffffffffffffffff8111156125b0576125af612075565b5b8086016125bd898261218d565b8552602085019450505060208101905061258d565b5050509392505050565b600082601f8301126125f1576125f0612075565b5b8135612601848260208601612555565b91505092915050565b600067ffffffffffffffff82111561262557612624612090565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561265157612650612090565b5b61265a8261207f565b9050602081019050919050565b600061267a61267584612636565b6120f0565b9050828152602081018484840111156126965761269561207a565b5b6126a184828561213c565b509392505050565b600082601f8301126126be576126bd612075565b5b81356126ce848260208601612667565b91505092915050565b60006126ea6126e58461260a565b6120f0565b9050808382526020820190506020840283018581111561270d5761270c61236c565b5b835b8181101561275457803567ffffffffffffffff81111561273257612731612075565b5b80860161273f89826126a9565b8552602085019450505060208101905061270f565b5050509392505050565b600082601f83011261277357612772612075565b5b81356127838482602086016126d7565b91505092915050565b60008060008060008060c087890312156127a9576127a8611dcc565b5b600087013567ffffffffffffffff8111156127c7576127c6611dd1565b5b6127d389828a016123da565b965050602087013567ffffffffffffffff8111156127f4576127f3611dd1565b5b61280089828a016123da565b955050604087013567ffffffffffffffff81111561282157612820611dd1565b5b61282d89828a016124fb565b945050606087013567ffffffffffffffff81111561284e5761284d611dd1565b5b61285a89828a016125dc565b935050608087013567ffffffffffffffff81111561287b5761287a611dd1565b5b61288789828a016125dc565b92505060a087013567ffffffffffffffff8111156128a8576128a7611dd1565b5b6128b489828a0161275e565b9150509295509295509295565b60008060008060008060c087890312156128de576128dd611dcc565b5b60006128ec89828a01611eca565b96505060206128fd89828a01611eca565b955050604061290e89828a0161247d565b945050606087013567ffffffffffffffff81111561292f5761292e611dd1565b5b61293b89828a0161218d565b935050608087013567ffffffffffffffff81111561295c5761295b611dd1565b5b61296889828a0161218d565b92505060a087013567ffffffffffffffff81111561298957612988611dd1565b5b61299589828a016126a9565b9150509295509295509295565b60006020820190506129b76000830184611e6d565b92915050565b6000806000606084860312156129d6576129d5611dcc565b5b60006129e48682870161247d565b93505060206129f586828701611eca565b925050604084013567ffffffffffffffff811115612a1657612a15611dd1565b5b612a228682870161218d565b9150509250925092565b612a3581612454565b82525050565b600081519050919050565b600082825260208201905092915050565b6000612a6282612a3b565b612a6c8185612a46565b9350612a7c818560208601612246565b612a858161207f565b840191505092915050565b600060c082019050612aa56000830189611e43565b612ab26020830188611e43565b612abf6040830187612a2c565b8181036060830152612ad18186612279565b90508181036080830152612ae58185612279565b905081810360a0830152612af98184612a57565b9050979650505050505050565b60008060408385031215612b1d57612b1c611dcc565b5b6000612b2b85828601611df7565b9250506020612b3c85828601611eca565b9150509250929050565b600080600060608486031215612b5f57612b5e611dcc565b5b600084013567ffffffffffffffff811115612b7d57612b7c611dd1565b5b612b89868287016126a9565b9350506020612b9a86828701611eca565b9250506040612bab86828701611eca565b9150509250925092565b60006020820190508181036000830152612bcf8184612a57565b905092915050565b7f4b657920616c7265616479206578697374730000000000000000000000000000600082015250565b6000612c0d601283612a46565b9150612c1882612bd7565b602082019050919050565b60006020820190508181036000830152612c3c81612c00565b9050919050565b60008160601b9050919050565b6000612c5b82612c43565b9050919050565b6000612c6d82612c50565b9050919050565b612c85612c8082612454565b612c62565b82525050565b6000612c978284612c74565b60148201915081905092915050565b7f53656e64657220646f6573206e6f742068617665206d616e6167656d656e742060008201527f6b65790000000000000000000000000000000000000000000000000000000000602082015250565b6000612d02602383612a46565b9150612d0d82612ca6565b604082019050919050565b60006020820190508181036000830152612d3181612cf5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612d7282611e39565b9150612d7d83611e39565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612db257612db1612d38565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000612df782611e39565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612e2a57612e29612d38565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612e7c57607f821691505b60208210811415612e9057612e8f612e35565b5b50919050565b60008190508160005260206000209050919050565b60008154612eb881612e64565b612ec28186612235565b94506001821660008114612edd5760018114612eef57612f22565b60ff1983168652602086019350612f22565b612ef885612e96565b60005b83811015612f1a57815481890152600182019150602081019050612efb565b808801955050505b50505092915050565b60008190508160005260206000209050919050565b60008154612f4d81612e64565b612f578186612a46565b94506001821660008114612f725760018114612f8457612fb7565b60ff1983168652602086019350612fb7565b612f8d85612f2b565b60005b83811015612faf57815481890152600182019150602081019050612f90565b808801955050505b50505092915050565b6000608082019050612fd56000830187611e43565b8181036020830152612fe78186612eab565b90508181036040830152612ffb8185612eab565b9050818103606083015261300f8184612f40565b905095945050505050565b7f53656e64657220646f6573206e6f74206861766520616374696f6e206b657900600082015250565b6000613050601f83612a46565b915061305b8261301a565b602082019050919050565b6000602082019050818103600083015261307f81613043565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b60006130c26130bd6130b884613086565b61309d565b613090565b9050919050565b6130d2816130a7565b82525050565b600060408201905081810360008301526130f28185612eab565b905061310160208301846130c9565b9392505050565b600081905092915050565b600061311e8261222a565b6131288185613108565b9350613138818560208601612246565b80840191505092915050565b60006131508284613113565b915081905092915050565b600060208201905081810360008301526131758184612eab565b905092915050565b7f4e6f2073756368206b6579000000000000000000000000000000000000000000600082015250565b60006131b3600b83612a46565b91506131be8261317d565b602082019050919050565b600060208201905081810360008301526131e2816131a6565b9050919050565b7f53656e64657220646f6573206e6f74206861766520636c61696d207369676e6560008201527f72206b6579000000000000000000000000000000000000000000000000000000602082015250565b6000613245602583612a46565b9150613250826131e9565b604082019050919050565b6000602082019050818103600083015261327481613238565b9050919050565b6000819050919050565b61329661329182611e39565b61327b565b82525050565b60006132a88285612c74565b6014820191506132b88284613285565b6020820191508190509392505050565b60006080820190506132dd6000830187611e43565b81810360208301526132ef8186612279565b905081810360408301526133038185612279565b905081810360608301526133178184612a57565b905095945050505050565b600061332d82613090565b915060ff82141561334157613340612d38565b5b600182019050919050565b7f416c726561647920657865637574656400000000000000000000000000000000600082015250565b6000613382601083612a46565b915061338d8261334c565b602082019050919050565b600060208201905081810360008301526133b181613375565b9050919050565b60006133c382611e39565b91506133ce83611e39565b9250828210156133e1576133e0612d38565b5b82820390509291505056fea26469706673582212204b0c70881eddf6661959902359326b91612bae6fdf916383d14129e272e1a2f564736f6c63430008090033"
}