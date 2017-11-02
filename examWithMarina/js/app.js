const dataController = (() => {

    const data = {
        exams: [],
        totalStudents: 0,
        failedStudents: 0,
        passedStudents: 0,
        failedPercent: 0,
        passedPercent: 0

    };

    function Exam(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }
    Exam.prototype.getQuickInfo = function () {
        return `${this.student} ${this.grade}`;
    }

    return {
        createExam({ subject, student, grade }) {

            data.failedPercent = 0;
            data.passedPercent = 0;

            var exam = new Exam(subject, student, parseFloat(grade));

            data.exams.push(exam);
            data.totalStudents++;

            if (exam.grade >= 6 && exam.grade <= 10) {
                data.passedStudents++
            } else {
                data.failedStudents++
            }

            data.failedPercent = ((data.failedStudents * 100) / data.totalStudents).toFixed(0);
            data.passedPercent = 100 - data.failedPercent;

            return exam;
        },

        getTotalStudents() {
            return data.totalStudents;
        },

        getFailedStudents() {
            return data.failedStudents;
        },
        getPassedStudents() {
            return data.passedStudents;
        },

        getPercent() {
            return {
                passed: data.passedPercent,
                failed: data.failedPercent
            }
        }

        // getFailedStudentsPercent: getFailedStudentsPercent,
        // getPassedStudentsPercent: getPassedStudentsPercent
    }

})();

const UIController = (() => {
    const DOMStrings = {
        inputSubjectSelect: '.add-subject',
        inputStudent: '.add-student-name',
        inputGrade: '.add-grade',
        monthContainer: '.exam-title-month',
        addButton: '.add-btn',
        containerFailedList: '.failed-list',
        containerPassedList: '.passed-list',
        containerTotalStudents: '.exam-total',
        containerErrorMsg: '.error',
        containerPassedSt: ".exam-passed-count",
        containerFailedSt: '.exam-failed-count',
        containerPassedStPercent: '.exam-passed-percentage',
        containerFailedStPercent: '.exam-failed-percentage',
        formContainer: 'form'
    }
    return {
        collectInput() {
            const subjectElement = $(DOMStrings.inputSubjectSelect);
            const subjectOptionElement = $(`${DOMStrings.inputSubjectSelect} option:selected`);
            const studentElement = $(DOMStrings.inputStudent);
            const gradeElement = $(DOMStrings.inputGrade);



            return {
                subject: subjectOptionElement.val(),
                student: studentElement.val(),
                grade: gradeElement.val()
            };
        },

        displayMonth() {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const monthElement = $(DOMStrings.monthContainer);
            const month = new Date().getMonth();
            monthElement.text(monthNames[month]);

        },

        getDOMStrings() {
            return DOMStrings;
        },

        displayFailHtml(exam) {
            const listEl = document.querySelector(DOMStrings.containerFailedList);
            const htmlItem = `<div class="item clearfix" id="failed-0">
            <div class="item-description">${exam.student}</div>
            <div class="right clearfix">
                    <div class="item-value">${exam.grade}</div>
                    <div class="item-delete">
                        <button class="item-delete-btn">x</i>
                        </button>
                    </div>
                </div>
            </div>`;

            listEl.insertAdjacentHTML('beforeend', htmlItem);
        },

        displayPassedHtml(exam) {
            const listEl = document.querySelector(DOMStrings.containerPassedList);
            
            const htmlItem = `<div class="item clearfix" id="passed-0">
            <div class="item-description">${exam.student}</div>
            <div class="right clearfix">
                <div class="item-value">${exam.grade}</div>
                <div class="item-delete">
                        <button class="item-delete-btn">x</i>
                        </button>
                    </div>
                </div>
            </div>`;
            
            listEl.insertAdjacentHTML('beforeend', htmlItem);

        },

showError() {
    let errorMsg = 'Wrong input data.';
    document.querySelector(DOMStrings.containerErrorMsg).textContent = errorMsg;
},

clearData() {
    document.querySelector(DOMStrings.containerErrorMsg).textContent = "";
    return document.querySelector(DOMStrings.formContainer).reset();
},

displayTotalStudents(totalSt) {
    document.querySelector(DOMStrings.containerTotalStudents).textContent = `Total students: ${totalSt}`;
},

displayPassedStudents(passSt) {
    document.querySelector(DOMStrings.containerPassedSt).textContent = passSt;
},

displayFailedStudents(failSt) {
    document.querySelector(DOMStrings.containerFailedSt).textContent = failSt;
},
displayPercent(percent) {
    document.querySelector(DOMStrings.containerFailedStPercent).textContent = `${percent}%`;
},
displayStudentsPercentPass(percent) {
    document.querySelector(DOMStrings.containerPassedStPercent).textContent = `${percent}%`;
}

    }

})();

var mainController = ((UICtrl, dataCtrl) => {
    //display the month
    UICtrl.displayMonth();
    //create events
    var DOM = UICtrl.getDOMStrings();

    $(DOM.addButton).on('click', ctrlAddExam);
    //main func
    function ctrlAddExam() {
        //collect input data
        const { student, grade, subject } = UICtrl.collectInput();
        //show error of invalid input
        if (!student || !grade) {
            UICtrl.showError();
            return;
        }
        const input = { student, subject, grade };
        //create exam
        const exam = dataCtrl.createExam(input);
        //display exams 
        const totalStudents = dataCtrl.getTotalStudents();
        const failedStudents = dataCtrl.getFailedStudents();
        const passedStudents = dataCtrl.getPassedStudents();
        const passedPercent = dataCtrl.getPercent();
        const failedPercent = dataCtrl.getPercent();

        UICtrl.displayTotalStudents(totalStudents);

        if (exam.grade >= 6 && exam.grade <= 10) {
            UICtrl.displayPassedStudents(passedStudents);
            UICtrl.displayPassedHtml(exam);

        } else if (exam.grade === 5) {
            UICtrl.displayFailedStudents(failedStudents);
            UICtrl.displayFailHtml(exam);
        } else {
            UICtrl.showError();
        }

        UICtrl.displayStudentsPercentPass(passedPercent.passed);

        UICtrl.displayPercent(failedPercent.failed);
        //reset data
        UICtrl.clearData();
    }



})(UIController, dataController);