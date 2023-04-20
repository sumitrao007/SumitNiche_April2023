//json object
//java script object notation 
// key & value format 
var obj = {
    id: 9,
    fname: 'Sumit',
    lname: 'Raokhande'
};
// 1 dot operator
// 2 square operator
// 1 dot operator
// console.log(`
//     Id          = ${obj.id}
//     First Name  :: ${obj.fname}
//     Last Name   :: ${obj.lname}
// `)
// 2 square operator
// console.log(`
//         -------------------
//         Id          :: ${obj["id"]}
//         First Name  :: ${obj['fname']}
//         Last Name   :: ${obj["lname"]}
// `)
//Array Of Object 
var arrObj = [
    {
        id: 9,
        fname: "Sumit",
        lname: "Raokhande",
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", 'Oct', 'Dec'],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 55
            }
        ]
    },
    {
        id: 6,
        fname: "Kiran",
        lname: "Raokhande",
        country: {
            cid: 2,
            cname: "US"
        },
        month: ["Feb", 'Aug', 'Nov'],
        result: [
            {
                subj: "M1",
                marks: 50
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "M3",
                marks: 75
            }
        ]
    },
    {
        id: 3,
        fname: "Spruha",
        lname: "Raokhande",
        country: {
            cid: 3,
            cname: "Japan"
        },
        month: ["March", 'July', 'Dec'],
        result: [
            {
                subj: "M1",
                marks: 48
            },
            {
                subj: "M2",
                marks: 85
            },
            {
                subj: "M3",
                marks: 65
            }
        ]
    }
];
// console.log(`
//     ID          :: ${arrObj[1].id}
//     First name  :: ${arrObj[1].fname}
//     Last Name   :: ${arrObj[1].lname}
// `)
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n            ID          :: ".concat(arrObj[i].id, "\n            First Name  :: ").concat(arrObj[i].fname, "\n            Last Name   :: ").concat(arrObj[i].lname, "\n            Country     :: ").concat(arrObj[i].country.cname, "\n            Month       :: ").concat(arrObj[i].month.join("  "), "\n            -------------Result-------------\n        "));
    // for(let j=0;j<arrObj[i].result.length;j++){
    //     console.log(`
    //         Subject   :: ${arrObj[i].result[j].subj}
    //         Marks     :: ${arrObj[i].result[j].marks}
    //     `)
    // }
    arrObj[i].result.forEach(function (item) {
        console.log("\n                    Subject :: ".concat(item.subj, "\n                    Marks   :: ").concat(item.marks, "\n                "));
    });
}
