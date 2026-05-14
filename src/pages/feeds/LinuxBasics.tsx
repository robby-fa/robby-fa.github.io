import ArticleLayout from '../../components/ArticleLayout';

/* ─── Reusable building blocks ─── */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2 id={id} className="text-2xl font-bold text-slate-900 mt-12 mb-5 pb-3 border-b border-slate-200">
            {children}
        </h2>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-lg font-semibold text-slate-800 mt-8 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" />
            {children}
        </h3>
    );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
    return (
        <pre className="bg-slate-900 text-slate-100 rounded-xl px-5 py-4 overflow-x-auto text-sm leading-relaxed font-mono my-4">
            {children}
        </pre>
    );
}

function Callout({ type, children }: { type: 'info' | 'warn'; children: React.ReactNode }) {
    const styles = {
        info: 'bg-blue-50 border-blue-300 text-blue-800',
        warn: 'bg-amber-50 border-amber-300 text-amber-800',
    };
    return (
        <div className={`border-l-4 rounded-r-lg px-5 py-3 my-4 text-sm leading-relaxed ${styles[type]}`}>
            {children}
        </div>
    );
}

interface CmdRow { cmd: string; description: string; }

function CmdTable({ rows }: { rows: CmdRow[] }) {
    return (
        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-slate-100 text-slate-600 text-left">
                        <th className="px-4 py-3 font-semibold w-2/5">Command</th>
                        <th className="px-4 py-3 font-semibold">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-3">
                                <code className="font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs">
                                    {row.cmd}
                                </code>
                            </td>
                            <td className="px-4 py-3 text-slate-600">{row.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/* ─── Command data ─── */

const navigationCmds: CmdRow[] = [
    { cmd: 'pwd',           description: 'Print current working directory' },
    { cmd: 'ls',            description: 'List files in current directory' },
    { cmd: 'ls -la',        description: 'List all files including hidden, with permissions & size' },
    { cmd: 'ls -lh',        description: 'List files with human-readable sizes (KB, MB)' },
    { cmd: 'cd <dir>',      description: 'Change into a directory' },
    { cmd: 'cd ..',         description: 'Go up one level to parent directory' },
    { cmd: 'cd ~',          description: 'Go to home directory' },
    { cmd: 'cd -',          description: 'Go to previous directory' },
    { cmd: 'tree',          description: 'Display directory tree recursively' },
    { cmd: 'tree -L 2',     description: 'Display tree limited to 2 levels deep' },
];

const fileCmds: CmdRow[] = [
    { cmd: 'touch <file>',          description: 'Create an empty file (or update timestamp)' },
    { cmd: 'mkdir <dir>',           description: 'Create a new directory' },
    { cmd: 'mkdir -p a/b/c',        description: 'Create nested directories at once' },
    { cmd: 'cp <src> <dst>',        description: 'Copy a file' },
    { cmd: 'cp -r <src> <dst>',     description: 'Copy a directory recursively' },
    { cmd: 'mv <src> <dst>',        description: 'Move or rename a file/directory' },
    { cmd: 'rm <file>',             description: 'Remove a file' },
    { cmd: 'rm -r <dir>',           description: 'Remove a directory recursively' },
    { cmd: 'rm -rf <dir>',          description: 'Force-remove without prompts (use with caution!)' },
    { cmd: 'ln -s <target> <link>', description: 'Create a symbolic link' },
];

const viewingCmds: CmdRow[] = [
    { cmd: 'cat <file>',        description: 'Print entire file content to terminal' },
    { cmd: 'less <file>',       description: 'View file page by page (q to quit)' },
    { cmd: 'head -n 10 <file>', description: 'Show first 10 lines of a file' },
    { cmd: 'tail -n 10 <file>', description: 'Show last 10 lines of a file' },
    { cmd: 'tail -f <file>',    description: 'Follow file output in real-time (great for logs)' },
    { cmd: 'wc -l <file>',      description: 'Count the number of lines in a file' },
    { cmd: 'nano <file>',       description: 'Open file in nano text editor (beginner-friendly)' },
    { cmd: 'vim <file>',        description: 'Open file in vim editor (i to insert, :wq to save & quit)' },
];

const permissionCmds: CmdRow[] = [
    { cmd: 'ls -l',                 description: 'Show file permissions, owner, and size' },
    { cmd: 'chmod 755 <file>',      description: 'Set permissions: owner rwx, group & others rx' },
    { cmd: 'chmod +x <file>',       description: 'Add execute permission for all' },
    { cmd: 'chmod -R 755 <dir>',    description: 'Apply permissions recursively to a directory' },
    { cmd: 'chown user:group <f>',  description: 'Change owner and group of a file' },
    { cmd: 'chown -R user <dir>',   description: 'Change owner recursively' },
    { cmd: 'sudo <command>',        description: 'Run a command as superuser (root)' },
    { cmd: 'sudo su',               description: 'Switch to root user session' },
];

const systemCmds: CmdRow[] = [
    { cmd: 'uname -a',          description: 'Print all system information (kernel, OS, arch)' },
    { cmd: 'whoami',            description: 'Print current logged-in username' },
    { cmd: 'hostname',          description: 'Show or set the system hostname' },
    { cmd: 'id',                description: 'Show current user ID and group IDs' },
    { cmd: 'df -h',             description: 'Show disk usage for all mounted filesystems (human-readable)' },
    { cmd: 'du -sh <dir>',      description: 'Show total size of a specific directory' },
    { cmd: 'free -h',           description: 'Display RAM and swap memory usage' },
    { cmd: 'top',               description: 'Real-time view of running processes (q to quit)' },
    { cmd: 'htop',              description: 'Enhanced interactive process viewer (install separately)' },
    { cmd: 'ps aux',            description: 'List all running processes with details' },
    { cmd: 'kill <PID>',        description: 'Terminate a process by its process ID' },
    { cmd: 'kill -9 <PID>',     description: 'Force-kill a process immediately' },
    { cmd: 'uptime',            description: 'Show how long the system has been running' },
    { cmd: 'history',           description: 'List previously executed commands' },
    { cmd: 'clear',             description: 'Clear the terminal screen' },
];

const networkCmds: CmdRow[] = [
    { cmd: 'ping <host>',           description: 'Test network connectivity to a host' },
    { cmd: 'ip addr',               description: 'Show network interfaces and IP addresses' },
    { cmd: 'ifconfig',              description: 'Display/configure network interfaces (older systems)' },
    { cmd: 'netstat -tulpn',        description: 'List all active connections and listening ports' },
    { cmd: 'ss -tulpn',             description: 'Modern replacement for netstat' },
    { cmd: 'curl <url>',            description: 'Make an HTTP request and display response' },
    { cmd: 'curl -O <url>',         description: 'Download a file keeping the remote filename' },
    { cmd: 'wget <url>',            description: 'Download a file from the web' },
    { cmd: 'ssh user@host',         description: 'Connect to a remote server via SSH' },
    { cmd: 'ssh -p 2222 user@host', description: 'Connect via SSH on a custom port' },
    { cmd: 'scp file user@host:/', description: 'Securely copy a file to a remote server' },
];

const searchCmds: CmdRow[] = [
    { cmd: 'find / -name "*.log"',      description: 'Search for all .log files starting from root' },
    { cmd: 'find . -type f -name "*.sh"', description: 'Find shell scripts in current directory' },
    { cmd: 'grep "text" <file>',        description: 'Search for a pattern inside a file' },
    { cmd: 'grep -r "text" <dir>',      description: 'Recursively search in all files under a directory' },
    { cmd: 'grep -i "text" <file>',     description: 'Case-insensitive search' },
    { cmd: 'grep -n "text" <file>',     description: 'Show line numbers alongside matches' },
    { cmd: 'which <command>',           description: 'Find the full path of an executable command' },
    { cmd: 'locate <file>',             description: 'Quick file search using a prebuilt index database' },
];

const packageCmds: CmdRow[] = [
    { cmd: 'apt update',            description: 'Refresh the package list from repositories' },
    { cmd: 'apt upgrade',           description: 'Upgrade all installed packages' },
    { cmd: 'apt install <pkg>',     description: 'Install a package' },
    { cmd: 'apt remove <pkg>',      description: 'Remove a package (keep config files)' },
    { cmd: 'apt purge <pkg>',       description: 'Remove a package and all its config files' },
    { cmd: 'apt search <keyword>',  description: 'Search for packages by keyword' },
    { cmd: 'dpkg -l',               description: 'List all installed packages' },
];

const archiveCmds: CmdRow[] = [
    { cmd: 'tar -czf out.tar.gz <dir>',  description: 'Create a compressed .tar.gz archive' },
    { cmd: 'tar -xzf archive.tar.gz',   description: 'Extract a .tar.gz archive' },
    { cmd: 'tar -tzf archive.tar.gz',   description: 'List contents of a .tar.gz without extracting' },
    { cmd: 'zip -r out.zip <dir>',      description: 'Create a .zip archive' },
    { cmd: 'unzip archive.zip',         description: 'Extract a .zip archive' },
    { cmd: 'gzip <file>',               description: 'Compress a file into .gz format' },
    { cmd: 'gunzip <file.gz>',          description: 'Decompress a .gz file' },
];

const redirectCmds: CmdRow[] = [
    { cmd: 'cmd1 | cmd2',       description: 'Pipe: send output of cmd1 as input to cmd2' },
    { cmd: 'cmd > file.txt',    description: 'Redirect output to file (overwrites)' },
    { cmd: 'cmd >> file.txt',   description: 'Append output to file' },
    { cmd: 'cmd 2> err.txt',    description: 'Redirect stderr (errors) to a file' },
    { cmd: 'cmd 2>&1',          description: 'Redirect stderr to stdout (combine streams)' },
    { cmd: 'cmd1 && cmd2',      description: 'Run cmd2 only if cmd1 succeeds' },
    { cmd: 'cmd1 || cmd2',      description: 'Run cmd2 only if cmd1 fails' },
];

/* ─── Directory structure data ─── */

const dirStructure = [
    { path: '/',        desc: 'Root — top of the entire filesystem hierarchy' },
    { path: '/bin',     desc: 'Essential user binaries: ls, cp, mv, cat, bash…' },
    { path: '/boot',    desc: 'Bootloader files and kernel images' },
    { path: '/dev',     desc: 'Device files (disks, terminals, pseudo-devices)' },
    { path: '/etc',     desc: 'System-wide configuration files (hosts, fstab, ssh…)' },
    { path: '/home',    desc: 'Home directories for regular users (/home/username)' },
    { path: '/lib',     desc: 'Shared libraries needed by /bin and /sbin binaries' },
    { path: '/media',   desc: 'Auto-mount point for removable media (USB, CD…)' },
    { path: '/mnt',     desc: 'Temporary manual mount point' },
    { path: '/opt',     desc: 'Optional / third-party installed software packages' },
    { path: '/proc',    desc: 'Virtual filesystem exposing kernel & process info' },
    { path: '/root',    desc: 'Home directory of the root (superuser) account' },
    { path: '/run',     desc: 'Runtime data (PIDs, sockets) — cleared on reboot' },
    { path: '/sbin',    desc: 'System administration binaries: fdisk, iptables…' },
    { path: '/srv',     desc: 'Data for services hosted by this system (web, ftp)' },
    { path: '/sys',     desc: 'Virtual filesystem for hardware/driver info' },
    { path: '/tmp',     desc: 'Temporary files — cleared on reboot' },
    { path: '/usr',     desc: 'Secondary hierarchy: user programs, libraries, docs' },
    { path: '/usr/bin', desc: 'Non-essential user commands (python, git, curl…)' },
    { path: '/usr/lib', desc: 'Libraries for /usr/bin programs' },
    { path: '/usr/local',desc: 'Locally compiled / manually installed software' },
    { path: '/var',     desc: 'Variable data that changes at runtime' },
    { path: '/var/log', desc: 'System and application log files' },
    { path: '/var/www', desc: 'Web server document root (Apache/Nginx default)' },
];

/* ─── Page ─── */

export default function LinuxBasics() {
    return (
        <ArticleLayout
            title="Linux Basics: Commands & Directory Structure"
            subtitle="A comprehensive reference for essential Linux terminal commands and an in-depth look at the Linux filesystem hierarchy."
            tags={['Linux', 'Terminal', 'Beginner']}
            date="May 14, 2026"
            readTime="8 min"
        >
            {/* Intro */}
            <p className="text-slate-600 leading-relaxed text-base">
                Linux is the backbone of the modern internet — from web servers and cloud infrastructure to Android phones and IoT devices.
                Understanding how to navigate the terminal and the filesystem structure is a foundational skill for developers, system administrators, and security professionals alike.
            </p>
            <p className="text-slate-600 leading-relaxed text-base mt-3">
                This article covers the two most important things to know when starting with Linux: the <strong className="text-slate-800">directory structure</strong> and the <strong className="text-slate-800">essential commands</strong> you'll use daily.
            </p>

            {/* ── 1. Directory Structure ── */}
            <SectionHeading id="dir-structure">1. Linux Directory Structure</SectionHeading>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Unlike Windows which uses drive letters (C:\, D:\), Linux has a single root <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-700 font-mono text-xs">/</code> from which everything branches. This is called the <strong className="text-slate-800">Filesystem Hierarchy Standard (FHS)</strong>.
            </p>

            {/* ASCII Tree */}
            <CodeBlock>
{`/
├── bin/          → Essential user binaries (ls, cp, mv, bash...)
├── boot/         → Kernel & bootloader files
├── dev/          → Device files (/dev/sda, /dev/null...)
├── etc/          → System configuration files
│   ├── hosts
│   ├── fstab
│   └── ssh/
├── home/         → User home directories
│   └── username/
│       ├── Desktop/
│       ├── Downloads/
│       └── .bashrc
├── lib/          → Shared libraries for /bin and /sbin
├── media/        → Auto-mount for removable devices (USB, CD)
├── mnt/          → Manual temporary mount point
├── opt/          → Third-party optional software
├── proc/         → Virtual FS: kernel & process info
├── root/         → Root user's home (not /home/root!)
├── run/          → Runtime PIDs & sockets (cleared on boot)
├── sbin/         → System admin binaries (fdisk, iptables...)
├── srv/          → Data for hosted services
├── sys/          → Virtual FS: hardware & driver info
├── tmp/          → Temporary files (cleared on reboot)
├── usr/          → Secondary user hierarchy
│   ├── bin/      → Non-essential user commands (git, python...)
│   ├── lib/      → Libraries for /usr/bin
│   ├── local/    → Locally compiled software
│   └── share/    → Architecture-independent data
└── var/          → Variable/runtime data
    ├── log/      → System & application logs
    ├── tmp/      → Persistent temp files
    └── www/      → Web server document root`}
            </CodeBlock>

            <Callout type="info">
                <strong>Tip:</strong> Run <code className="font-mono bg-blue-100 px-1.5 py-0.5 rounded text-xs">ls /</code> in your terminal to see the root-level directories on your system. They may vary slightly by distribution (Ubuntu, Debian, CentOS, etc.).
            </Callout>

            {/* Dir table */}
            <SubHeading>Quick Reference: What Each Directory Does</SubHeading>
            <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-slate-100 text-slate-600 text-left">
                            <th className="px-4 py-3 font-semibold w-1/4">Directory</th>
                            <th className="px-4 py-3 font-semibold">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dirStructure.map((d, i) => (
                            <tr key={d.path} className={`border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                                <td className="px-4 py-3">
                                    <code className="font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs font-semibold">
                                        {d.path}
                                    </code>
                                </td>
                                <td className="px-4 py-3 text-slate-600">{d.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ── 2. Commands ── */}
            <SectionHeading id="commands">2. Essential Linux Commands</SectionHeading>

            <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Commands follow the general pattern: <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-xs text-blue-700">command [options] [arguments]</code>. Options usually start with <code className="font-mono bg-slate-100 px-1 rounded text-xs text-blue-700">-</code> (short) or <code className="font-mono bg-slate-100 px-1 rounded text-xs text-blue-700">--</code> (long form).
            </p>

            {/* 2.1 Navigation */}
            <SubHeading>2.1 Navigation</SubHeading>
            <CmdTable rows={navigationCmds} />
            <CodeBlock>
{`# Navigate to a project folder and list its contents
cd ~/projects/my-app
ls -la

# Show where you are and display tree (2 levels)
pwd
tree -L 2`}
            </CodeBlock>

            {/* 2.2 File Management */}
            <SubHeading>2.2 File & Directory Management</SubHeading>
            <CmdTable rows={fileCmds} />
            <Callout type="warn">
                <strong>Warning:</strong> <code className="font-mono bg-amber-100 px-1.5 py-0.5 rounded text-xs">rm -rf</code> permanently deletes files with no recycle bin. Double-check the path before running it.
            </Callout>
            <CodeBlock>
{`# Create a project structure in one command
mkdir -p project/{src,tests,docs}

# Copy a folder while preserving permissions
cp -r ./dist ./backup

# Rename a file
mv old-name.txt new-name.txt`}
            </CodeBlock>

            {/* 2.3 Viewing */}
            <SubHeading>2.3 Viewing & Editing Files</SubHeading>
            <CmdTable rows={viewingCmds} />
            <CodeBlock>
{`# Follow a live log file (Ctrl+C to stop)
tail -f /var/log/syslog

# Count lines in a file
wc -l access.log

# View a file page by page (press space to advance, q to quit)
less /etc/hosts`}
            </CodeBlock>

            {/* 2.4 Permissions */}
            <SubHeading>2.4 File Permissions & Ownership</SubHeading>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Linux permissions are split into three groups: <strong className="text-slate-700">owner</strong>, <strong className="text-slate-700">group</strong>, and <strong className="text-slate-700">others</strong>. Each group can have <code className="font-mono bg-slate-100 px-1 rounded text-xs">r</code> (read=4), <code className="font-mono bg-slate-100 px-1 rounded text-xs">w</code> (write=2), <code className="font-mono bg-slate-100 px-1 rounded text-xs">x</code> (execute=1).
            </p>
            <CodeBlock>
{`# Permission breakdown from ls -l output:
# -rwxr-xr-- 1 robby staff 1234 May 14 app.sh
#  │││││││││
#  ││││││└─── others: r-- = 4 (read only)
#  │││└──── group:  r-x = 5 (read & execute)
#  └── owner: rwx = 7 (full access)

# Common chmod values
chmod 755 script.sh    # owner: all  | group: rx  | others: rx
chmod 644 config.txt   # owner: rw   | group: r   | others: r
chmod 600 id_rsa       # owner: rw   | none for group/others (SSH key)`}
            </CodeBlock>
            <CmdTable rows={permissionCmds} />

            {/* 2.5 System */}
            <SubHeading>2.5 System Information & Process Management</SubHeading>
            <CmdTable rows={systemCmds} />
            <CodeBlock>
{`# Check if a process is running and get its PID
ps aux | grep nginx

# Kill a process by name (requires psmisc package)
killall nginx

# Check disk usage of current directory, sorted by size
du -sh * | sort -rh | head -10`}
            </CodeBlock>

            {/* 2.6 Networking */}
            <SubHeading>2.6 Networking</SubHeading>
            <CmdTable rows={networkCmds} />
            <CodeBlock>
{`# Test connectivity and show response time
ping -c 4 google.com

# Download a file silently and save with custom name
curl -o output.json https://api.example.com/data

# SSH with identity file (private key)
ssh -i ~/.ssh/id_rsa user@192.168.1.10

# Copy a local folder to a remote server
scp -r ./dist/ user@server:/var/www/html/`}
            </CodeBlock>

            {/* 2.7 Search */}
            <SubHeading>2.7 Search & Find</SubHeading>
            <CmdTable rows={searchCmds} />
            <CodeBlock>
{`# Find all Python files modified in the last 7 days
find . -name "*.py" -mtime -7

# Search for "error" in all log files (case-insensitive)
grep -ri "error" /var/log/

# Find all world-writable files (security audit)
find / -perm -002 -type f 2>/dev/null`}
            </CodeBlock>

            {/* 2.8 Package Management */}
            <SubHeading>2.8 Package Management (Ubuntu / Debian)</SubHeading>
            <CmdTable rows={packageCmds} />
            <CodeBlock>
{`# Update & upgrade in one step
sudo apt update && sudo apt upgrade -y

# Install multiple packages at once
sudo apt install git curl vim htop -y

# Search for a package before installing
apt search "text editor"`}
            </CodeBlock>

            {/* 2.9 Archives */}
            <SubHeading>2.9 Archives & Compression</SubHeading>
            <CmdTable rows={archiveCmds} />
            <CodeBlock>
{`# Archive a folder with verbose output
tar -czvf backup.tar.gz /var/www/html/

# Extract to a specific directory
tar -xzf backup.tar.gz -C /tmp/restore/

# tar flag cheatsheet:
# -c  create   -x  extract   -z  gzip   -j  bzip2
# -v  verbose  -f  filename  -C  destination`}
            </CodeBlock>

            {/* 2.10 Pipes & Redirects */}
            <SubHeading>2.10 Pipes, Redirects & Operators</SubHeading>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Pipes and redirects let you chain commands and control where input/output flows — one of Linux's most powerful features.
            </p>
            <CmdTable rows={redirectCmds} />
            <CodeBlock>
{`# Count how many running processes contain "python"
ps aux | grep python | wc -l

# Save error messages to a log file
./script.sh 2> errors.log

# Combine stdout and stderr into one file
./build.sh > build.log 2>&1

# Run update only if connection check succeeds
ping -c 1 google.com && sudo apt update`}
            </CodeBlock>

            {/* Closing */}
            <SectionHeading id="next-steps">3. What's Next?</SectionHeading>
            <p className="text-slate-600 leading-relaxed text-sm">
                These commands cover the core of everyday Linux usage. Once you're comfortable with them, consider exploring:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {[
                    'Bash scripting — automate repetitive tasks with shell scripts',
                    'cron jobs — schedule commands to run automatically',
                    'systemd & services — manage background services (nginx, ssh, etc.)',
                    'iptables / ufw — configure firewall rules',
                    'tmux / screen — manage multiple terminal sessions',
                    'vim / neovim — become efficient in a terminal text editor',
                ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {item}
                    </li>
                ))}
            </ul>

            <Callout type="info">
                <strong>Practice tip:</strong> Install a Linux VM (Ubuntu via VirtualBox or WSL on Windows) and practice every command in this guide. Muscle memory is the fastest way to get comfortable with the terminal.
            </Callout>
        </ArticleLayout>
    );
}
