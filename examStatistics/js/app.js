const dataController = (() => {

    const data = {
        exams: [],
        totalStudents: 0,
        totalPassed: 0,
        totalFailed: 0,
        passedPercent: 0,
        failedPercent: 0
    }

    class Exam {
        constructor(subject, student, grade) {
            this.name,
                this.grade,
                this.subject
        }
        get quickInfo() {
            return `${this.name}   ${this.grade}`;
        }

    };

    return {
        createExam({subject, student, grade}) {
            data.failedPercent = 0;
            data.passedPercent = 0;
    
            const exam = new Exam(subject, student, parseFloat(grade));

            data.exams.push(exam);
            data.totalStudents++;
            
            if(grade >= 6 && grade <= 10) {
                data.totalPassed++;
            } else if(grade === 5) {
                data.totalFailed++;
            } else {
                throw new Error('Please enter a valid grade.');
            }
        
            let failedPercent = ((data.totalFailed / data.totalStudents) * 100).toFixed(0);
            let passedPercent = 100 - failedPercent;

            return exam;
        },

        getTotalStudents() {
            return data.totalStudents;
        },

        getTotalFailed() {
            return data.totalFailed;
        },

        getTotalPassed() {
            return data.totalPassed;
        },

        getPercent() {
            return {
                passed: data.passedPercent,
                failed: data.failedPercent
            }
        }
    }

})();

const UIController = (() => {
    
    const DOMSelectors = {
        monthContainer: document.getElementsByClassName(".exam-title-month"),
        totalStudentsField: document.getElementsByClassName(".exam-total"),
        passedField: document.getElementsByClassName(".exam-passed-count"),
        failedField: document.getElementsByClassName(".exam-failed-count"),
        passedPercentageField: document.getElementsByClassName(".exam-passed-percentage"),
        failedPercentageField: document.getElementsByClassName(".exam-failed-percentage"),
        subjectSelect: document.getElementsByClassName(".add-subject"),
        inputName: document.getElementsByClassName(".add-student-name"),
        inputGrade: document.getElementsByClassName(".add-grade"),
        addButton: document.getElementsByClassName(".add-btn"),
        passedList: document.getElementsByClassName(".passed"),
        failedList: document.getElementsByClassName(".failed")
    }

    return {

        collectInput() {
            const subjectElement = DOMSelectors.subjectSelect("option:selected");
            const studentElement = DOMSelectors.inputName;
            const gradeElement = DOMSelectors.inputgrade;

            return {
                subject: subjectElement.val(),
                student: studentElement.val(),
                grade: gradeElement.val()
            }
        },

        displayMonth() {

        },

        displayFailedList() {
            
        },

        displayPassedList() {

        },

        displayError() {

        }
    }

})();

const mainController = (() => {

})();