function end() {
    console.log("=".repeat(30));
}

function pattern1(n) {
    console.log("Pattern 1");
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
    end();
}

function pattern2(n) {
    console.log("Pattern 2");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
    end();
}

function pattern3(n) {
    console.log("Pattern 3");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
    end();
}

function pattern4(n) {
    console.log("Pattern 4");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${i}`);
        }
        console.log();
    }
    end();
}

function pattern5(n) {
    console.log("Pattern 5");
    for (let i = 0; i < n; i++) {
        for (let j = n - i; j > 0; j--) {
            process.stdout.write("*");
        }
        console.log();
    }
    end();
}

function pattern6(n) {
    console.log("Pattern 6");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
    end();
}

function pattern7(n) {
    console.log("Pattern 7");
    let col = n * 2 - 1;
    for (let i = 1; i <= n; i++) {
        let star = i * 2 - 1;
        let spaces = (col - star) / 2;
        console.log(" ".repeat(spaces) + "*".repeat(star) + " ".repeat(spaces));
    }
    end();
}

function pattern8(n) {
    console.log("Pattern 8");
    let star = 2 * n - 1;
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(i) + "*".repeat(star) + " ".repeat(i));
        star -= 2;
    }
    end();
}

function pattern9(n) {
    console.log("Pattern 9");
    let totalCol = 2 * n - 1;
    for (let i = 1; i <= (2 * n); i++) {
        let spaces = i < 4 ? n - i : i - n - 1;
        let star = totalCol - (2 * spaces);
        console.log(' '.repeat(spaces) + '*'.repeat(star) + ' '.repeat(spaces));
    }
    end();
}

function pattern10(n) {
    console.log('Pattern 10');
    for (let i = 0; i < 2 * n - 1; i++) {
        let spaces = Math.abs(n - i - 1);
        let star = n - spaces;
        console.log('*'.repeat(star) + ' '.repeat(spaces));
    }
    end();
}

function pattern11(n) {
    console.log('Pattern 11');
    for (let i = 1; i <= n; i++) {
        let p = i % 2 == 0 ? 0 : 1;
        for (let j = 0; j < i; j++) {
            process.stdout.write(`${p}`);
            p = p == 0 ? 1 : 0;
        }
        console.log();
    }
}

function pattern12(n) {
    console.log('Pattern 12');
    let totalCol = 2 * n;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        process.stdout.write(' '.repeat(n - i) + ' '.repeat(n - i));
        for (let j = i; j >= 1; j--) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
    end();
}

function pattern13(n) {
    console.log('Pattern 13');
    let counter = 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(`${counter++}` + ' ');
        }
        console.log();
    }
    end();
}

function pattern14(n) {
    console.log('Pattern 14');
    let code = 65;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(`${String.fromCharCode(code + j)}`);
        }
        console.log();
    }
    end();
}

function pattern15(n) {
    console.log('Pattern 15');
    let code = 65;
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(`${String.fromCharCode(code + j)}`);
        }
        console.log();
    }
    end();
}

function pattern16(n){
    console.log('Pattern 16');
    let code = 65;
    for(let i=0;i<n;i++){
        console.log(String.fromCharCode(code+i).repeat(i+1));
    }
    end();
}

// pattern1(3);
// pattern2(5);
// pattern3(5);
// pattern4(5);
// pattern5(5);
// pattern6(5);
// pattern7(4);
// pattern8(4);
// pattern9(3);
// pattern10(3);
// pattern11(4);
// pattern12(4);
// pattern13(4);
// pattern14(4);
// pattern15(4);
pattern16(4);
